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

// export function Login(props) {
//   const { children, onClose, ...other } = props;

//   return (
//     <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
//       {children}
//       {onClose ? (
//         <IconButton
//           aria-label="close"
//           onClick={onClose}
//           sx={{
//             position: "absolute",
//             right: 8,
//             top: 8,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </DialogTitle>
//   );
// }

// Login.propTypes = {
//   children: PropTypes.node,
//   onClose: PropTypes.func.isRequired,
// };

export default function ModalLogin(props) {
  const [openModal,setOpenModal] = React.useState(props);
  console.log(props,11111)

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
    
    { isSigIn ?<SignIn id="customized-dialog-title" onClose={open}  setIsSignIn={setIsSignIn}></SignIn>: <SignUp setIsSignIn={setIsSignIn}/>}
    </BootstrapDialog>
    </div>
  );
}
