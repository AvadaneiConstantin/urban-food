// Displays an image in fullscreen modal
// Uses MUI Modal and Box for layout, IconButton for closing
// Image scales responsively with max dimensions, has border radius and shadow
// Clicking close button calls onClose callback

import { Box, IconButton, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface FullScreenImgProps {
  imgSrc: string;
  onClose: () => void;
}

const FullScreenImg: React.FC<FullScreenImgProps> = ({ imgSrc, onClose }) => {
  return (
    <Modal
      open={true}
      onClose={onClose}
      closeAfterTransition
      BackdropProps={{
        sx: { backgroundColor: "rgba(0,0,0,0.7)" },
      }}
    >
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <img
          src={imgSrc}
          alt="fullscreen"
          style={{
            maxWidth: "95%",
            maxHeight: "95%",
            objectFit: "contain",
            borderRadius: 8,
            boxShadow: "0 0 20px rgba(0,0,0,0.5)",
            cursor: "pointer",
          }}
        />
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            bgcolor: "white",
            "&:hover": { bgcolor: "grey.300" },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Modal>
  );
};

export default FullScreenImg;
