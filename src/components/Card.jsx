function Card({data}){
    let maxTemp=data.day.maxtemp_c;
    if(Math.floor(maxTemp)===maxTemp) maxTemp+='.0';
    let minTemp=data.day.mintemp_c;
    if(Math.floor(minTemp)===minTemp) minTemp+='.0';

    const getRelativeDay = (dateStr) => {
        const today = new Date();
        const cardDate = new Date(dateStr);
        const diffDays = Math.floor((cardDate - today) / (1000 * 60 * 60 * 24));
        
        switch(diffDays) {
            case -1: return 'Today';
            case 0: return 'Tomorrow';
            case 1: return 'Day after tomorrow';
            default: return dateStr;
        }
    }

    return(<div className="card">
        <p id="card-date">{getRelativeDay(data.date)}</p>
        <p className="maxTemp">max: {maxTemp}°C</p>
        <p className="minTemp">min: {minTemp}°C</p>
    </div>)
};

export default Card;
