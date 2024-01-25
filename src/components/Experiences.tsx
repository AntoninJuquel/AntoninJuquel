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
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";

import Section from "./common/Section";
import Title from "./common/Title";
import { sections } from "../data";
const { experiences } = sections;

function Experiences() {
  const theme = useTheme();
  return (
    <Section id="experiences">
      <Title>Experiences</Title>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {experiences.map((experience, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="secondary" />
              {index !== experiences.length - 1 && (
                <TimelineConnector style={{ background: "#854CE6" }} />
              )}
            </TimelineSeparator>
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
                      src={experience.img}
                      alt={experience.company}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "contain",
                      }}
                    />
                  }
                  title={experience.role}
                  subheader={
                    <>
                      {experience.company}
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        display="block"
                      >
                        {experience.date}
                      </Typography>
                    </>
                  }
                />
                <Stack
                  direction="row"
                  sx={{ padding: "1rem" }}
                  flexWrap="wrap"
                  gap={1}
                >
                  {experience.skills?.map((skill) => (
                    <Chip key={skill} label={skill} />
                  ))}
                </Stack>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {experience.description}
                  </Typography>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
}

export default Experiences;
