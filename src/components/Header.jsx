function Header({ cityName, setCityName, onSearch }) {
  function changeCityName(e) {
    setCityName(e.target.value);
  }
  return (
    <div className="search">
      <input
        id="city-name"
        type="text"
        placeholder="ENTER CITY"
        value={cityName}
        onChange={changeCityName}
        onKeyDown={(e) => e.key === 'Enter' && onSearch()}
      />
      <i
        className="fa-solid fa-magnifying-glass"
        onClick={onSearch}
        style={{ cursor: "pointer" }}
      ></i>
    </div>
  );
}

export default Header;
