import { Form, Label, Input } from './FormStyles.styled';
import { NeonButton } from 'components/Layout/Layout.styled';

export const LoginForm = () => {
  return (
    <Form>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" required />
      </Label>
      <NeonButton type="submit">Log In</NeonButton>
    </Form>
  );
};
