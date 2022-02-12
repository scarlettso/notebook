import React, {useState, useEffect} from 'react';
import moment from 'moment';

const Clock = (props) => {
    const current = new Date(); 
    const [clock, setClock] = useState(current);
    useEffect(()=> {
        const intervalID = setInterval(()=>{
            setClock(new Date());
        }, 1000)
        return () => {clearInterval(intervalID)
             console.log("bye")};
    }, []);
    return (
        <div>
            <p>{moment(clock).format("mm:ss")}</p>
        </div>
    )
}

export default Clock;