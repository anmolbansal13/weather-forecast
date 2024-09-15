

function Card({data}){
    // console.log(data);
    let maxTemp=data.day.maxtemp_c;
    if(Math.floor(maxTemp)===maxTemp) maxTemp+='.0';
    let minTemp=data.day.mintemp_c;
    if(Math.floor(minTemp)===minTemp) minTemp+='.0';
    return(<div className="card">
        <p id="card-date">{data.date}</p>
        <img id="card-img" src="//cdn.weatherapi.com/weather/64x64/night/176.png" alt="" />

        <p className="maxTemp">{maxTemp}°C</p>
        -
        <p className="minTemp">{minTemp}°C</p>

    </div>)
};

export default Card;