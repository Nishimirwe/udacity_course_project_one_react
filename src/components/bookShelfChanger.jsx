import React from 'react';

const Changer=(updateMove, moveItem, data)=>
{
    return <div className="book-shelf-changer">
    <select onChange={updateMove}>
        <option value="move">Move to...</option>
        <option value="cr">Currently Reading</option>
        <option value="r">Read</option>
        <option value="none">None</option>
      </select>
    </div>;
}

export default Changer;