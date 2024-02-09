import { useDispatch, useSelector } from 'react-redux';

import { getFilterSelector } from '../../redux/selectors';
import { setSearchFilterAction } from '../../redux/filterSlice';

export const Filter = () => {
  const { filter } = useSelector(getFilterSelector);
  const dispatch = useDispatch();

  const filterChange = e => {
    dispatch(setSearchFilterAction(e.target.value));
  };

  return (
    <label>
      <input
        type="text"
        name="filter"
        value={filter}
        placeholder="Search..."
        onChange={filterChange}
      />
    </label>
  );
};
