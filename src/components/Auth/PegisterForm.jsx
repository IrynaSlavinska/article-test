import { Form, Label, Input, Text } from './FormStyles.styled';
import { NeonButton } from 'components/Layout/Layout.styled';

export const RegisterForm = () => {
  return (
    <Form>
      <Label>
        Username
        <Input type="text" name="name" placeholder="Enter your name" required />
      </Label>
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
        <Input
          type="password"
          name="password"
          placeholder="Enter password"
          required
        />
      </Label>
      <NeonButton type="submit">Register</NeonButton>
      <Text>Already have an account?</Text>
    </Form>
  );
};
