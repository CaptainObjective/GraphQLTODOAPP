import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import useStyles from "./style";
import { Icon } from "@material-ui/core";
import { signUp, signIn } from "./query";
import { Mutation } from "react-apollo";
import { query as me } from "../App/App";

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");

  const [registerForm, setregisterForm] = useState(false);
  const [passVisibility, setpassVisibility] = useState(false);

  const handleSubmit = (e, signUp, signIn) => {
    e.preventDefault();
    registerForm ? register(signUp, signIn) : login(signIn);
  };

  const register = async (signUp, signIn) => {
    let alertMsg = "";
    if (!email.includes("@") || !email.includes("."))
      alertMsg += "Podaj poprawny email \n";
    if (name === "") alertMsg += "Podaj imię \n";
    if (pass === "") alertMsg += "Podaj hasło \n";
    if (pass !== pass2) alertMsg += "Hasła muszą być identyczne\n";

    if (alertMsg !== "") alert(alertMsg);
    else {
      try {
        await signUp({
          variables: {
            data: {
              email: email,
              password: pass,
              fullName: name
            },
            refetchQueries: [{ query: me }]
          }
        });
        login(signIn);
      } catch (ex) {
        alert(handelException(ex.message));
      }
    }
  };

  const login = async signIn => {
    let alertMsg = "";
    if (!email.includes("@") || !email.includes("."))
      alertMsg += "Podaj poprawny email\n";
    if (pass === "") alertMsg += "Podaj hasło\n";

    if (alertMsg !== "") alert(alertMsg);
    else {
      try {
        await signIn({
          variables: {
            email: email,
            password: pass
          },
          refetchQueries: [{ query: me }]
        });
      } catch (ex) {
        alert(handelException(ex.message));
      }
    }
  };

  const handelException = ex => {
    if (ex.includes("WRONG_EMAIL"))
      return "Nie ma użytkownika o tym adresie email.\n Jeśli nie masz konta zarejestruj się.";
    if (ex.includes("WRONG_PASSWORD"))
      return "Podano nie poprawną pare email/haslo.";
    if (ex.includes("EMAIL_TAKEN"))
      return "Konto o tym adresie email już istnieje";
    return "Error w chuj";
  };
  return (
    <Mutation mutation={signUp}>
      {(signUp, { loading: loading1, error: error1 }) => (
        <Mutation mutation={signIn}>
          {(signIn, { loading: loading2, error: error2 }) => {
            if (loading1 || loading2) return <p>Wczytywanie...</p>;
            return (
              <Container className={classes.root} maxWidth="sm">
                <Paper className={classes.paper}>
                  <form
                    className={classes.form}
                    onSubmit={e => handleSubmit(e, signUp, signIn)}
                    noValidate
                    autoComplete="off"
                  >
                    <Typography
                      gutterBottom
                      className={classes.title}
                      variant="h4"
                    >
                      My TODO App
                    </Typography>
                    {registerForm && (
                      <TextField
                        id="name"
                        label="imie"
                        type="text"
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                        autoComplete="current-name"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        InputProps={{
                          endAdornment: <Icon>account_circle</Icon>
                        }}
                      />
                    )}
                    <TextField
                      id="email"
                      label="email"
                      type="email"
                      value={email}
                      onChange={({ target }) => setEmail(target.value)}
                      autoComplete="current-email"
                      margin="normal"
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        endAdornment: <Icon>alternate_email</Icon>
                      }}
                    />
                    <TextField
                      id="password"
                      label="hasło"
                      type={passVisibility ? "text" : "password"}
                      value={pass}
                      onChange={({ target }) => setPass(target.value)}
                      autoComplete="current-password"
                      margin="normal"
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        endAdornment: (
                          <Icon
                            style={{ cursor: "pointer" }}
                            onClick={() => setpassVisibility(!passVisibility)}
                          >
                            {passVisibility ? "visibility" : "visibility_off"}
                          </Icon>
                        )
                      }}
                    />
                    {registerForm && (
                      <TextField
                        id="password2"
                        label="potwierdź hasło"
                        type={passVisibility ? "text" : "password"}
                        value={pass2}
                        onChange={({ target }) => setPass2(target.value)}
                        // autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                      />
                    )}
                    <div className={classes.buttons}>
                      <Button
                        onClick={() => setregisterForm(!registerForm)}
                        color="secondary"
                        variant="contained"
                      >
                        {registerForm ? "A jednak mam" : "Nie mam konta"}
                      </Button>
                      <Button type="submit" color="primary" variant="contained">
                        {registerForm ? "Zarejestruj" : "Zaloguj"}
                      </Button>
                    </div>
                  </form>
                </Paper>
              </Container>
            );
          }}
        </Mutation>
      )}
    </Mutation>
  );
};

export default Login;
