import Typography from "@mui/material/Typography";

type TitleProps = {
  children: string;
};

function Title({ children }: TitleProps) {
  return (
    <Typography
      variant="h3"
      fontWeight="bold"
      component="h2"
      gutterBottom
      color={(theme) => theme.text_primary}
      textAlign="center"
    >
      {children}
    </Typography>
  );
}

export default Title;
