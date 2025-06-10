function FilterByHouse({ house, onChange }) {
  return (
    <form>
      <label>Filtrar por casa </label>
      <select id="house" value={house} onChange={onChange}>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
    </form>
  );
}

export default FilterByHouse;
