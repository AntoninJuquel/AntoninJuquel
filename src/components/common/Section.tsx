import Box from "@mui/material/Box";

type SectionProps = {
  id: string;
  children: React.ReactNode;
};

function Section({ id, children }: SectionProps) {
  return (
    <Box id={id} sx={{ paddingTop: 10 ,paddingX: { xs: 2, md: 48 }, marginY: 4 }}>
      {children}
    </Box>
  );
}

export default Section;
