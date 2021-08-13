import React from 'react';
import { Link} from 'react-router-dom';

const BottomButton =({changePages})=>
{
    const element=<Link to="/search">
      <div className="open-search">
    <button onClick={changePages}>Add a book</button>
  </div>
  </Link>;
  return element;
}
export default BottomButton;