import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

type TitleProps = {
  children: string;
};

function Title({ children }: TitleProps) {
  const theme = useTheme();
  return (
    <Typography
      variant="h3"
      fontWeight="bold"
      component="h2"
      gutterBottom
      color={theme.palette.text.primary}
      textAlign="center"
    >
      {children}
    </Typography>
  );
}

export default Title;
