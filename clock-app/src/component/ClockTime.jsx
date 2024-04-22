function ClockTime(){
    let pastdates=["3/12/23","15/9/23","4/2/24"];
    let samay=new Date();
    var year = samay.getFullYear();
    var month = samay.getMonth() + 1; 
    var date = samay.getDate();
    return <div className="container">
        <span>Past dates: </span>
        if (pastdates.length==0) {
            <span>Thier is no past dates yet!!</span>
        }else{
            <>{pastdates.map((dates)=>(
                <span key={dates}>{dates} </span>
            ))}</>
        }
        <p>This is the current time: {date}/{month}/{year}</p>
    </div>
}
export default ClockTime;