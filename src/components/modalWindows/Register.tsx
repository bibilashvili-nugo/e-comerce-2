import {
  Modal,
  Typography,
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  styled,
} from "@mui/material";
import { useBurger } from "../../context/ContextForBurger";

const StyledButton = styled(Button)({
  padding: "13px",
  background: "#b30000",
  ":hover": {
    background: "#990000",
  },
});

const Register = () => {
  const { openRegister, setOpenRegister } = useBurger();

  const handleClose = () => {
    setOpenRegister(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "none",
    borderRadius: "5px",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  return (
    <div>
      <Modal
        open={openRegister}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign={"center"}
            fontWeight={"bolder"}
            fontSize={25}
          >
            Register
          </Typography>
          <TextField id="outlined-basic" label="📧 Email" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="👨‍🎓 First Name"
            variant="outlined"
            type="text"
          />
          <TextField
            id="outlined-basic"
            label="👨 Last Name"
            variant="outlined"
            type="text"
          />
          <TextField
            id="outlined-basic"
            label="🔑 Password"
            variant="outlined"
            type="password"
          />
          <FormControlLabel control={<Checkbox />} label="Remember me" />
          <StyledButton variant="contained">LOGIN</StyledButton>
        </Box>
      </Modal>
    </div>
  );
};

export default Register;
