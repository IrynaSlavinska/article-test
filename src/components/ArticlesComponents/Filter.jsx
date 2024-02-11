import { useDispatch, useSelector } from 'react-redux';

import { getFilterSelector } from '../../redux/selectors';
import { setSearchFilterAction } from '../../redux/slices/filterSlice';
import { SearchInput, Label } from './ArticleComponents.styled';
// import { Input, Label } from './ArticleComponents.styled';
export const Filter = () => {
  const { filter } = useSelector(getFilterSelector);
  const dispatch = useDispatch();

  const filterChange = e => {
    dispatch(setSearchFilterAction(e.target.value));
  };

  return (
    <Label>
      <SearchInput
        type="text"
        name="filter"
        value={filter}
        placeholder="Search..."
        onChange={filterChange}
      />
    </Label>
  );
};
