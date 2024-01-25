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

import ExternalLinkIcon from "@mui/icons-material/OpenInNew";
import GithubIcon from "@mui/icons-material/GitHub";
import Close from "@mui/icons-material/Close";

type Props = {
  modalState: ModalState;
  setModalState: (openModal: ModalState) => void;
};

function ProjectDetails({ modalState, setModalState }: Props) {
  const theme = useTheme();
  const { project } = modalState;
  const onClose = () => setModalState({ project: null, isOpen: false });

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
          <CardMedia
            component="img"
            height="194"
            image={project.image}
            alt={project.title}
            sx={{ objectFit: "contain" }}
          />
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
            <Button
              color="primary"
              href={project.github}
              target="_blank"
              startIcon={<GithubIcon />}
            >
              Source Code
            </Button>
            {project.app && project.app !== project.github && (
              <Button
                color="primary"
                href={project.app}
                target="_blank"
                startIcon={<ExternalLinkIcon />}
              >
                Application
              </Button>
            )}
          </CardActions>
          <CardContent>
            <Typography
              variant="body2"
              color={theme.text_secondary}
              whiteSpace="pre-wrap"
            >
              {project.description}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <div>Something wron happened</div>
      )}
    </Modal>
  );
}

export default ProjectDetails;
