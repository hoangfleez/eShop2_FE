import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./style.css";
import { Form, Formik, Field } from "formik";
import { TextField } from "formik-mui";
import LinearProgress from "@mui/material/LinearProgress";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../sevives/useService";
import { Flare } from "@mui/icons-material";
import LoginWithGG from "./LoginWithGG";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn(props) {

//  console.log(props)
  const [message, setMessage] = React.useState("");

  const dispatch = useDispatch();

  const submit = (user) => {
    dispatch(login(user)).then((data) => {
      if (data.payload === "Password is wrong") {
        setMessage("Mật khẩu không đúng! Hãy nhập lại!");
      }
      else if (data.payload === "User is not exist") {
        setMessage("Tài khoản không tồn tại!");
      } else{

      }
    });
  };



  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng nhập
          </Typography>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            // onSubmit={(values) => {
            //   submit(values);
            // }}
            onSubmit={(values, { setSubmitting }) => {
              submit(values);
              setTimeout(() => {
                setSubmitting(false);
              }, 500);
            }}
          >
            {({ submitForm, isSubmitting }) => (
              <Form>
                <Box
                  // component="form"
                  // onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <Field
                    component={TextField}
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Tên tài khooản"
                    name="username"
                    autoComplete="username"
                    inputProps={{ minLength: 2 }}
                    color="secondary"
                  />

                  <Field
                    component={TextField}
                    margin="normal"
                    required
                    fullWidth
                    inputProps={{ minLength: 6 }}
                    name="password"
                    label="Mật khẩu"
                    type="password"
                    id="password"
                    color="secondary"
                    autoComplete="current-password"
                  />

                  {message ? <small className="small">{message}</small> : ""}

                  {isSubmitting && <LinearProgress />}
                  <Button
                    id="btn-signin"
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={isSubmitting}
                    onClick={submitForm}
                    sx={{ mt: 3, mb: 2, backgroundColor:"pink" }}
                  >
                    Đăng nhập
                  </Button>

                  <Grid container>
                    <Grid item xs>
                      <Link variant="body2" sx={{ color: "black" }}>
                        Quên mật khẩu?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link
                        sx={{ color: "black" }}
                        variant="body2"
                        onClick={() => {
                          props.setIsSignIn(false);
                        }}
                      >
                        {"Bạn chưa có tài khoản? Tạo ngay"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Form>
            )}
          </Formik>
          
          <LoginWithGG/>
        
        </Box>

        <Copyright sx={{ mt:2, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
