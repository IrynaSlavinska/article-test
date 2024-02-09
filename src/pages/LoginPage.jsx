import { TextField, Button, Typography } from '@mui/material';

export const LoginPage = ({ setEmail, setPassword }) => {
  return (
    <>
      <Typography variant="h4" textAlign="center">
        Authorization
      </Typography>

      <TextField
        label="Email"
        variant="outlined"
        fullWidth={true}
        margin="normal"
        placeholder="Enter your email"
        onChange={e => setEmail(e.target.value)}
      />

      <TextField
        label="Password"
        variant="outlined"
        type="password"
        fullWidth={true}
        margin="normal"
        placeholder="Enter password"
        onChange={e => setPassword(e.target.value)}
      />

      <Button
        type="submit"
        sx={{ marginTop: 1, marginBottom: 1, width: '60%' }}
        variant="contained"
      >
        Log In
      </Button>

      <Typography variant="body1" textAlign="center">
        Haven`t got an account?
        <span className="navigateText">Register now</span>
      </Typography>
    </>
  );
};
