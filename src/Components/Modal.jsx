import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import SignIn from "../pages/user/Login";
import SignUp from "../pages/user/SigUp";
import { HighlightOff } from "@mui/icons-material";
import { Stack } from "react-bootstrap";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function ModalLogin(props) {

  const [open, setOpen] = React.useState(false);
  const [isSigIn,setIsSignIn] = React.useState(true);

  
  const handleCloseModal = () => {
    props.close();
  };

  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    
    <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
    >
    <Stack >
    <IconButton size="large" sx={{width:"50px", marginLeft:"400px"}} onClick={handleCloseModal}>
      <HighlightOff ></HighlightOff>
    </IconButton>
    </Stack>
    
    { isSigIn ?<SignIn id="customized-dialog-title" onClose={open} close={setOpen} setIsSignIn={setIsSignIn}></SignIn>: <SignUp setIsSignIn={setIsSignIn}/>}
    </BootstrapDialog>
    </div>
  );
}
