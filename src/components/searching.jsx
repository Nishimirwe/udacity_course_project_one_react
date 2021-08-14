import React from 'react';
import { Link } from 'react-router-dom';

const Search =({changePages, search, dataSe, Reads, WantToRead,moveItem, CurrentlyReading, moveState,changeMove, resetMove, ctgr, setCurrentCtgrP})=>
{
    return (
        <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={changePages}>Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" value={dataSe} onChange={(e)=>search(e)} placeholder="Search by title or author"/>

          </div>
        </div>
        <div className="search-books-results">
        <center>
        <p>
              {dataSe.length ===0 ?
              <span></span>:
              
              <span id="cr-search-header">
                CURRENTLY READING CATEGORY
                </span>}
            </p>
        </center>

          {/* I am going to search in CurrentlyReading and show the search results down here */}
          <ol className="books-grid">

            {CurrentlyReading.filter((data)=>(data.author.toLowerCase().includes(""+dataSe.toLowerCase()) || data.title.toLowerCase().includes(""+dataSe.toLowerCase()))).map((crData,crindex)=>(
           <span>
             {dataSe.length!==0 ?
             <span>
               {moveState !== "no" && moveState!=="none" && moveState!=="none" && moveState!=="move" && ctgr==="cr"?
               <center className="move-btn"><button onClick={(e)=>moveItem(crData,ctgr)}>CONFIRM A MOVE</button></center>
               :
               <span></span>
              }
             
             <li key={crindex} className="book-li-search-cr">
            
            
             <div className="book">
               <div className="book-top">
                 <div className="book-cover" style={crData.url}></div>
                 
                 <div className="book-shelf-changer">
                   <select onChange={(e)=>changeMove(e)} onMouseOver={()=>setCurrentCtgrP("cr")}>
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
             :
             <p>
              {/* No data to display if a user is not typing in search */}
              </p>}
           </span>
            
            ))}
          
          </ol>

        <center>
          <p>
              {dataSe.length ===0 ?
              <span></span>:
              
              <span id="wr-search-header">
                WANT TO READ CATEGORY
                </span>}
            </p>
        </center>
          {/* I am going to write similar codes for searching in Want to reads */}
          <ol className="books-grid">
            {WantToRead.filter((data)=>(data.author.toLowerCase().includes(""+dataSe.toLowerCase()) || data.title.toLowerCase().includes(""+dataSe.toLowerCase()))).map((crData,crindex)=>(
           <span>
             {dataSe.length!==0 ?

             <span>
                {moveState !== "no" && moveState!=="none" && moveState!=="none" && moveState!=="move" && ctgr==="wr"?
               <center className="move-btn"><button onClick={(e)=>moveItem(crData,ctgr)}>CONFIRM A MOVE</button></center>
               :
               <span></span>
              }
             <li key={crindex} className="book-li-search-wr">
             
             <div className="book">
               <div className="book-top">
                 <div className="book-cover" style={crData.url}></div>
                 
                 <div className="book-shelf-changer">
                   <select onChange={(e)=>changeMove(e)} onMouseOver={()=>setCurrentCtgrP("wr")}>
                     <option value="move">Move to...</option>
                     <option value="cr">Currently Reading</option>
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
             :
             <p>
              {/* No data to display if a user is not typing in search */}
              </p>}
           </span>
            
            ))}
          
          </ol>

          {/* I am gon code search results for reads */}

          <center>
          <p>
              {dataSe.length ===0 ?
              <span></span>:
              
              <span id="r-search-header">
                READS CATEGORY
                </span>}
            </p>
        </center>
          {/* I am going to write similar codes for searching in Want to reads */}
          <ol className="books-grid">
            {Reads.filter((data)=>(data.author.toLowerCase().includes(""+dataSe.toLowerCase()) || data.title.toLowerCase().includes(""+dataSe.toLowerCase()))).map((crData,crindex)=>(
           <span>
             {dataSe.length!==0 ?

             <span>
                {moveState !== "no" && moveState!=="none" && moveState!=="none" && moveState!=="move" && ctgr==="r"?
               <center className="move-btn"><button onClick={(e)=>moveItem(crData,ctgr)}>CONFIRM A MOVE</button></center>
               :
               <span></span>
              }
             <li key={crindex} className="book-li-search-r">
             

             <div className="book">
               <div className="book-top">
                 <div className="book-cover" style={crData.url}></div>
                 
                 <div className="book-shelf-changer">
                   <select onChange={(e)=>changeMove(e)} onMouseOver={()=>setCurrentCtgrP("r")}>
                     <option value="move">Move to...</option>
                     <option value="cr">Currently Reading</option>
                     <option value="wr">Want to Read</option>
                     <option value="none">None</option>
                   </select>
                 </div>
  
               </div>
               <div className="book-title">{crData.title}</div>
               <div className="book-authors">{crData.author}</div>
             </div>
           </li>
           </span>
             :
             <p>
              {/* No data to display if a user is not typing in search */}
              </p>}
           </span>
            
            ))}
          
          </ol>

        </div>
      </div>
    );
}

export default Search;