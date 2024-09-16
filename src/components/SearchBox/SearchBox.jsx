import css from "./SearchBox.module.css"

export default function SearchBox({ value, onFilter }) {
    return (
      <div className={css.divSearch}>
        <p>Search by name</p>
        <input
          type="text"
          value={value}
          onChange={evt => onFilter(evt.target.value)}
          className={css.inputSearch}
        />
      </div>
    );
  }
  