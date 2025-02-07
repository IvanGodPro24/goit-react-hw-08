import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectHandleFilter } from "../../redux/selectors";

const SearchBox = () => {
  const searchId = useId();

  const dispatch = useDispatch();
  const name = useSelector(selectHandleFilter);

  const handleFilter = (name) => dispatch(changeFilter(name));

  return (
    <div className={css.filter}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="text"
        name="filter"
        id={searchId}
        value={name}
        onChange={(e) => handleFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
