import { TextField, Button, Typography } from '@mui/material';

export const RegisterPage = () => {
  return (
    <>
      <Typography variant="h4" textAlign="center">
        Registration
      </Typography>

      <TextField
        label="Name"
        variant="outlined"
        fullWidth={true}
        margin="normal"
        placeholder="Enter your name"
      />

      <TextField
        label="Email"
        variant="outlined"
        fullWidth={true}
        margin="normal"
        placeholder="Enter your email"
      />

      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth={true}
        margin="normal"
        placeholder="Enter password"
      />

      <Button
        sx={{ marginTop: 1, marginBottom: 1, width: '60%' }}
        variant="contained"
      >
        Register
      </Button>

      <Typography variant="body1" textAlign="center">
        Already have an account?
        <span className="navigateText">Log in</span>
      </Typography>
    </>
  );
};
