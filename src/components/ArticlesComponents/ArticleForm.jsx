import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';

import { addArticleAction } from '../../redux/slices/articlesSlice';
import { Form, Text, Label, Input, Button } from './ArticleComponents.styled';

export const ArticleForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addArticleAction({ title, description, id: nanoid() }));

    setTitle('');
    setDescription('');
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'title':
        setTitle(value);
        break;

      case 'description':
        setDescription(value);
        break;

      default:
        break;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Text>Create your own article</Text>
      <Label>
        Title
        <Input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          required
          placeholder="Name your article"
        />
      </Label>

      <Label>
        Description
        <Input
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
          required
          placeholder="Enter description"
        />
      </Label>

      <Button type="submit">Submit</Button>
    </Form>
  );
};
