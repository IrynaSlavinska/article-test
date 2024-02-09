import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';

import { addArticleAction } from '../../redux/articlesSlice';

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
    <form onSubmit={handleSubmit}>
      <p>Create your own article</p>
      <label>
        Title
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          required
          placeholder="Name your article"
        />
      </label>

      <label>
        Description
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
          required
          placeholder="Enter description"
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};
