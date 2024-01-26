import { useEffect, useState } from "react";

type UseDataParams<T> = {
  url: string;
  data: T;
};

export function useData<T>({ url, data }: UseDataParams<T>) {
  const [dataState, setData] = useState<T>(data);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json() as T)
      .then(setData)
      .catch((error) => {
        console.error(error);
      });
  }, [url]);

  return dataState;
}
