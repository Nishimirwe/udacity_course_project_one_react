import React from 'react';

const WTRead =({ReadsData, moveState, changeMove, moveItem})=> 
{
    return (<div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    {ReadsData.length !== 0 ?
                    
                    <ol className="books-grid">
                    {ReadsData.map((wData,windex)=>(
                        <span>
                          {moveState !== "no" ?
                        <center className="move-btn"><button onClick={(e)=>moveItem(wData)}>CONFIRM A MOVE</button></center>
                        :
                        <span></span>  
                        }
                          
                          
                        <li key={windex} className="book-li">
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={wData.url}></div>
                            
                            <div className="book-shelf-changer">
                              <select onChange={(e)=>changeMove(e)}>
                                <option value="move">Move to...</option>
                                <option value="cr">Currently Reading</option>
                                <option value="r">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>

                          </div>
                          <div className="book-title">{wData.title}</div>
                          <div className="book-authors">{wData.author}</div>
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
                </div>);
}

export default WTRead;