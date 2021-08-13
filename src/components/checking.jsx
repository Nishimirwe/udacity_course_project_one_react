import React from "react";
const Checks =({onCheckChange, value})=>
{
    return (<span className="checkin">
       <input type="text" value={value} onChange={onCheckChange}/>
    </span>);
}

export default Checks;