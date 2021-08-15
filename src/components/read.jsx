import React from 'react';

const Read=({ReadsData, ctgr, moveState, changeMove, moveItem, setCurrentCtgr, setCurrentBook, currentBook})=> 
{
    const element=<div className="bookshelf">
    <h2 className="bookshelf-title">Read</h2>
    <div className="bookshelf-books">
      {ReadsData.length !== 0 ?
      
      <ol className="books-grid">
      {ReadsData.map((readsData,rindex)=>
          (
            <span>
              {moveState !== "no" && moveState!=="none" && moveState!=="move" && ctgr==="r" ?
              <center className="move-btn"><button style={currentBook===readsData.id ? {display: "block"}: {display: "none"}}
               onClick={(e)=>moveItem(readsData)}>CONFIRM A MOVE</button></center>
              :
              <span></span>
              }
              
            <li key={rindex} className="book-li">

            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={readsData.url}></div>
             
                <div className="book-shelf-changer">
                  <select onChange={(e)=>changeMove(e)} onMouseOver={()=>{setCurrentBook(readsData); setCurrentCtgr()}}>
                    <option value="move">Move to...</option>
                    <option value="cr">Currently Reading</option>
                    <option value="wr">Want to Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
                
              </div>
              <div className="book-title">{readsData.title}</div>
              <div className="book-authors">{readsData.author}</div>
            </div>
          </li>
          
          </span>
          ))}
    </ol>
    :
    // The below paragraph is to be printed if no data in a category
    <p className="no-data">
      No data. Just move some books in this category.
    </p>
    }
    </div>
  </div>;

    return element;
}
export default Read;