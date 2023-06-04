import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { TextField } from "formik-mui";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./style.css";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { register } from "../../sevives/useService";
import { useDispatch, useSelector } from "react-redux";
import { LinearProgress } from "@mui/material";
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

export default function SignUp(props) {
  const dispatch = useDispatch();

  const [message, setMessage] = React.useState("");

  const submit = (user) => {
    dispatch(register(user)).then((data) => {
      if (data.payload === "User already existed!") {
        props.setIsSignIn();
        setMessage("Tài khoản đã tồn tại!");
      } else if (data.payload === "Please fill all the information!") {
        props.setIsSignIn();
        setMessage("Không được để trống!!");
      } else {
        props.setIsSignIn(true);
      }
    });
  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng ký
          </Typography>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              submit(values);
              setTimeout(() => {
                setSubmitting(false);
              }, 500);
            }}
          >
            {({ submitForm, isSubmitting, values, error }) => (
              <Form>
                <Box noValidate sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Field
                        component={TextField}
                        required
                        fullWidth
                        id="username"
                        label="Tên tào khoản"
                        name="username"
                        autoComplete="username"
                        // helperText={<ErrorMessage name="username" />}
                        color="secondary"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        component={TextField}
                        required
                        fullWidth
                        inputProps={{ minLength: 6 }}
                        name="password"
                        label="Mật khẩu"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        color="secondary"
                      />
                    </Grid>
                  </Grid>
                  {message ? <small className="small">{message}</small> : ""}
                  {isSubmitting && <LinearProgress />}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={isSubmitting}
                    onClick={submitForm}
                    sx={{ mt: 3, mb: 2 , backgroundColor:"pink"}}
                    id="btn-sigup"
                  >
                    Đăng ký
                  </Button>

                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link
                        href="#"
                        variant="body2"
                        onClick={() => {
                          props.setIsSignIn(true);
                        }}
                        sx={{ color: "black" }}
                      >
                        Bạn đã có tài khooản? Đăng nhập ngay
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Form>
            )}
          </Formik>
          <LoginWithGG/>
        </Box>
        <Copyright sx={{ mt: 5, mb: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
