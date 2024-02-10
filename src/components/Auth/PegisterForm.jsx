import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUserAction } from '../../redux/slices/authSlice';

import { Form, Label, Input, Text } from './FormStyles.styled';
import { NeonButton } from 'components/Layout/Layout.styled';
export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const user = { name, email, password };
    dispatch(registerUserAction(user));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Username
        <Input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
      </Label>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Enter password"
          required
        />
      </Label>
      <NeonButton type="submit">Register</NeonButton>
      <Text>Already have an account?</Text>
    </Form>
  );
};
