import React from "react";

const CReading =({ReadsData, changeButton, moveState, changeMove, moveItem})=> 
{
    const element=<div className="bookshelf">

      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        {/* I am going to control in case there are no bboks in the Reads Date.
        For example, all books in a category have been moved to other categories and no 
        category remains empty
        */}
        {ReadsData.length !== 0?

        <ol className="books-grid">
        {ReadsData.map((crData,crindex)=>(
          <span>
            {moveState !== "no" ?
            <center className="move-btn"><button onClick={(e)=>moveItem(crData)}>CONFIRM A MOVE</button></center>
            
            :

            <span></span>
          }
            
            <li key={crindex} className="book-li">
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={crData.url}></div>
                
                <div className="book-shelf-changer">
                  <select onChange={(e)=>changeMove(e)}>
                    <option value="move">Move to...</option>
                    <option value="wr">Want to Read</option>
                    <option value="r">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>

              </div>
              <div className="book-title">{crData.title}</div>
              <div className="book-authors">{crData.author}</div>
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

export default CReading;