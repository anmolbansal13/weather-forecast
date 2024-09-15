
function Current({weatherData}){
    const data=weatherData;
    // console.log("hi", data);
    return(<div className="current">
        <img src={data.current.condition.icon} alt="" />
        <p className="temp">{data.current.temp_c}°C</p>
        <p className="city">{data.location.name}, {data.location.region}</p>
    </div>)
};

export default Current;