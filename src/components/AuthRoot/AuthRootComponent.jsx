import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './AuthRootComponent.styled.jsx';
import { Box } from '@mui/system';
import { Root } from './AuthRootComponent.styled.jsx';

export const AuthRootComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();

  const handleSubmit = async e => {
    e.preventDefault();

    console.log(email);
    console.log(password);
  };

  return (
    <Root>
      <form className="form" onSubmit={handleSubmit}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          maxWidth={640}
          margin="auto"
          padding={5}
          borderRadius={4}
          boxShadow={'5px 5px 10px #ccc'}
        >
          {location.pathname === '/login' ? (
            <LoginPage setEmail={setEmail} setPassword={setPassword} />
          ) : location.pathname === '/register' ? (
            <RegisterPage />
          ) : null}
        </Box>
      </form>
    </Root>
  );
};
