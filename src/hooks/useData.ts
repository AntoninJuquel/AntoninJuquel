import { useEffect, useState } from "react";

const useLocalData = import.meta.env.VITE_USE_LOCAL_DATA === "true";

console.log("useLocalData:", useLocalData);

type UseDataParams<T> = {
  url: string;
  data: T;
};

export function useData<T>({ url, data }: UseDataParams<T>) {
  const [dataState, setData] = useState<T>(data);
  useEffect(() => {
    if (useLocalData) {
      return;
    }
    fetch(url)
      .then((response) => response.json() as T)
      .then(setData)
      .catch((error) => {
        console.error(error);
      });
  }, [url]);

  return dataState;
}
