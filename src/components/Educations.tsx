import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import Section from "./common/Section";
import Title from "./common/Title";
import { sections } from "../data";
const { educations } = sections;

function Educations() {
  const theme = useTheme();
  return (
    <Section id="educations">
      <Title>Educations</Title>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {educations.map((education, index) => (
          <TimelineItem key={index}>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Card
                sx={{
                  backgroundColor: theme.card,
                  border: `1px solid ${theme.secondary}`,
                  boxShadow: `${theme.shadow} 0px 4px 24px;`,
                  transition: "all .3s ease-in-out",
                  ":hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardHeader
                  avatar={
                    <img
                      src={education.img}
                      alt={education.school}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "contain",
                      }}
                    />
                  }
                  title={education.school}
                  subheader={
                    <>
                      {education.degree}
                      <Typography
                        variant="caption"
                        color={theme.text_secondary}
                        display="block"
                      >
                        {education.date}
                      </Typography>
                    </>
                  }
                />
                <CardContent>
                  <Typography variant="subtitle2" color={theme.text_secondary}>
                    Grade: {education.grade}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography variant="body2" color={theme.text_secondary}>
                    {education.description}
                  </Typography>
                </CardContent>
              </Card>
            </TimelineContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="secondary" />
              {index !== educations.length && (
                <TimelineConnector style={{ background: theme.primary }} />
              )}
            </TimelineSeparator>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
}

export default Educations;
