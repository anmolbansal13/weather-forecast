function Header({cityName, setCityName, onSearch}){
    // console.log(props);
    
    function changeCityName(e){
        setCityName(e.target.value);
    }
    return(
    <div className="search">
        <input id="city-name" type="text" placeholder="Enter city name" value={cityName} onChange={changeCityName}/>
        <i className="fa-solid fa-magnifying-glass" onClick={onSearch} style={{ cursor:'pointer'}}></i>
        
    </div>)
};

export default Header;