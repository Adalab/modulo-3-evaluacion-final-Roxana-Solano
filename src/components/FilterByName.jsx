function FilterByName({ searchName, onChange }) {
  return (
    <div>
      <form
        onChange={(ev) => {
          ev.preventDefault();
        }}
      >
        <label htmlFor="searName">Search by name </label>
        <input
          id="searName"
          type="text"
          value={searchName}
          onChange={onChange}
          placeholder="Ej: Harry "
        />
      </form>
    </div>
  );
}

export default FilterByName;
