import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";

import Markdown from "react-markdown";

import ExternalLinkIcon from "@mui/icons-material/OpenInNew";
import GithubIcon from "@mui/icons-material/GitHub";
import DownloadIcon from "@mui/icons-material/Download";
import Close from "@mui/icons-material/Close";
import { useEffect, useState } from "react";

type Props = {
  modalState: ModalState;
  setModalState: (openModal: ModalState) => void;
};

function ProjectDetails({ modalState, setModalState }: Props) {
  const theme = useTheme();
  const { project } = modalState;
  const onClose = () => setModalState({ project: null, isOpen: false });

  const [readme, setReadme] = useState("");

  useEffect(() => {
    if (!project?.readme) return;
    fetch(project.readme)
      .then((res) => res.text())
      .then((text) => setReadme(text));
  }, [project?.readme]);

  return (
    <Modal
      open={modalState.isOpen}
      onClose={onClose}
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {project ? (
        <Card
          sx={{
            boxShadow: `${theme.shadow} 0px 4px 24px;`,
            width: "90vw",
            height: "90vh",
            margin: "auto",
            overflow: "auto",
            backgroundColor: theme.card,
          }}
        >
          <CardActions>
            <IconButton onClick={onClose}>
              <Close />
            </IconButton>
          </CardActions>
          {project.video ? (
            <CardMedia
              component="video"
              image={project.video}
              controls
              sx={{
                width: "100%",
                maxWidth: "540px",
                margin: "auto",
              }}
            />
          ) : (
            <CardMedia
              component="img"
              image={project.image}
              alt={project.title}
              sx={{
                height: "300px",
                objectFit: "contain",
              }}
            />
          )}
          <Stack
            direction="row"
            sx={{ padding: "1rem" }}
            flexWrap="wrap"
            gap={1}
          >
            {project.tags.map((tag) => (
              <Chip key={tag} label={tag} />
            ))}
          </Stack>
          <CardHeader title={project.title} subheader={project.date} />
          <CardActions>
            {project.source && (
              <Button
                color="primary"
                href={project.source}
                target="_blank"
                startIcon={<GithubIcon />}
              >
                Source Code
              </Button>
            )}
            {project.application && (
              <Button
                color="primary"
                href={project.application}
                target="_blank"
                startIcon={<ExternalLinkIcon />}
              >
                Application
              </Button>
            )}
            {project.report && (
              <Button
                color="primary"
                href={project.report}
                startIcon={<DownloadIcon />}
              >
                Report
              </Button>
            )}
          </CardActions>
          <CardContent>
            {project.readme ? (
              <div
                style={{
                  paddingLeft: "1rem",
                  overflow: "auto",
                  whiteSpace: "pre-wrap",
                }}
              >
                <Markdown>{readme}</Markdown>
              </div>
            ) : (
              <Typography
                variant="body2"
                color={theme.text_secondary}
                whiteSpace="pre-wrap"
              >
                {project.description}
              </Typography>
            )}
          </CardContent>
        </Card>
      ) : (
        <div>Something wron happened</div>
      )}
    </Modal>
  );
}

export default ProjectDetails;
