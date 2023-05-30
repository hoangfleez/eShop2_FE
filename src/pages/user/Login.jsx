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
import { useDispatch } from "react-redux";
import { login } from "../../sevives/useService";
import { Alert, Stack } from "@mui/material";
import AlertTitle from "@mui/material/AlertTitle";

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
  const dispatch = useDispatch();
  const submit = (user) => {
    dispatch(login(user)).then((data) => {
      console.log(data);
      if (data.payload === "User is not exist") {
        localStorage.clear();
        // props.onClose(true);
      } else {
        // props.onClose();
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
            Sign in
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
            {({ submitForm, isSubmitting }) => (
              <Form>
                <Box noValidate sx={{ mt: 1 }}>
                  <Field
                    component={TextField}
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="User Name"
                    name="username"
                    autoComplete="username"
                    color="secondary"
                  />
                  <Field
                    component={TextField}
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    color="secondary"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  {isSubmitting && <LinearProgress />}
                  <Button
                    id="btn-signin"
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={isSubmitting}
                    onClick={submitForm}
                    sx={{ mt: 3, mb: 2, backgroundColor: "pink" }}
                  >
                    Sign In
                  </Button>

                  <Grid container>
                    <Grid item xs>
                      <Link variant="body2" sx={{ color: "black" }}>
                        Forgot password?
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
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>

        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
