import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { loginUserAction } from '../../redux/slices/authSlice';

import { Form, Label, Input } from './FormStyles.styled';
import { NeonButton } from 'components/Layout/Layout.styled';
export const LoginForm = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const loggedUser = { user, password };
    dispatch(loginUserAction(loggedUser));
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          value={user}
          onChange={e => setUser(e.target.value)}
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </Label>
      <NeonButton type="submit">Log In</NeonButton>
    </Form>
  );
};
