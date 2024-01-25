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

import ExternalLinkIcon from "@mui/icons-material/OpenInNew";
import GithubIcon from "@mui/icons-material/GitHub";

type Props = {
  modalState: ModalState;
  setModalState: (openModal: ModalState) => void;
};

function ProjectDetails({ modalState, setModalState }: Props) {
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
            boxShadow: 24,
            width: "50%",
            height: "90%",
            minWidth: 450,
            margin: "auto",
            overflow: "auto",
          }}
        >
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
            <Typography variant="body2" color="text.secondary">
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
