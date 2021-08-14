import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css';
//import Router packages
import { Route } from 'react-router-dom';
// Let me import my External Components
import Search from './components/searching';
import CReading from './components/CurrentlyReading';
import WTRead from './components/WantToRead';
import Read from './components/read';
import BottomButton from './components/navigator';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    searched: [],
    Reads: [{title:"The Hobbit",
            author:"J.R.R. Tolkien",
            category: "Reads",
            url:{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")' }},
            {title:"Oh, the Places You'll Go!",
            author:"Seuss",
            category: "Reads",
            url: { width: 128, height: 174, backgroundImage: 'url("http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api")' }},
            {title:"The Adventures of Tom Sawyer",
            author:"Mark Twain",
            url: { width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")' }}],
    
    CurrentlyReading : [{title: "To Kill a Mockingbird",
            author: "Harper Lee",
            category: "Currently Reading",
            url : { width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }},
            {title: "Ender's Game",
            category: "Currently Reading",
            author: "Orson Scott Card",
            url: { width: 128, height: 188, backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")' }}],

    WantToRead : [{title: "1776",
                  author: "David McCullough",
                  category: "Want to Read",
                  url: { width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")' }},
                  {title: "Harry Potter and the Sorcerer's Stone",
                  author: "J.K. Rowling",
                  category: "Want to Read",
                  url : { width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api")' }}],

    check: "",
    pages: "/",
    move: "no",
    searchData: "",
    currentCtgr: ""
  }

  // I am going to write  function which change the searchData state
  // and it will be passed in searching component.

   setCurrentCtgrP=(data)=>{
     this.setState({currentCtgr:data});
   }

  search=(e)=>
  {
    this.setState({searchData: e.target.value});
  }

  shiftCategories= (data,from)=>
  {
    if(this.state.move==="cr")
    {
      this.setState( prevState => ({
        CurrentlyReading: [...prevState.CurrentlyReading,data]
      }));
    }
    else if(this.state.move==="r")
    {
      this.setState( prevState => ({
        Reads: [...prevState.Reads, data]
      }));
    }
    else if(this.state.move==="wr")
    {
      this.setState( prevState => ({
        WantToRead: [...prevState.WantToRead, data]
      }));
    }
    if(this.state.move !=="no")
    {
      this.removeItemFromCategory(data,from);
      this.resetMove();
    }
  };

  resetMove=()=>
  {
    this.setState({move: "no"})
  }
    
  setMove=(e)=>
  {
    try{
      this.setState({move: e.target.value});
    }catch(e){
        if(e){
        this.setState({move: "no"})
        }
    }
  }

  removeItemFromCategory=(item,from)=>
  {
    if(from==="wr")
    {
      let newState=this.state.WantToRead.filter((data)=>data!==item);
      this.setState({WantToRead: newState});
    }
    else if(from==="r")
    {
      let newState=this.state.Reads.filter((data)=>data!==item);
      this.setState({Reads: newState});
    }
    else if(from==="cr")
    {
      let newState=this.state.CurrentlyReading.filter((data)=>data!==item);
      this.setState({CurrentlyReading: newState});
    }
  }

  render() {

    return (
      <div className="app">
        <p>
          {this.state.move} and search: {this.state.searchData}
        </p>
        <Route path="/search">
           <Search moveItem={(data,from)=>{this.shiftCategories(data,from)}}
            setCurrentCtgrP={(d)=>this.setCurrentCtgrP(d)} ctgr={this.state.currentCtgr} 
            resetMove={this.resetMove} moveState={this.state.move} changeMove={(e)=>this.setMove(e)} 
            changePages={()=>this.setState({pages:"/"})} Reads={this.state.Reads} 
            WantToRead={this.state.WantToRead} CurrentlyReading={this.state.CurrentlyReading} 
            search={(e)=>this.search(e)} dataSe={this.state.searchData} />
        </Route>
        <Route  exact path="/">
           <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                
                <CReading ReadsData={this.state.CurrentlyReading} setCurrentCtgr={()=>this.setState({currentCtgr: "cr"})} ctgr={this.state.currentCtgr} moveState={this.state.move} changeMove={(e)=>this.setMove(e)} moveItem={(data)=>{
                  this.shiftCategories(data,"cr")}} />
                  <br/>

                <WTRead ReadsData={this.state.WantToRead} setCurrentCtgr={()=>this.setState({currentCtgr: "wr"})} ctgr={this.state.currentCtgr} moveState={this.state.move} changeMove={(e)=>this.setMove(e)}  moveItem={(data)=>{
                  this.shiftCategories(data,"wr")}} />

                <Read ReadsData={this.state.Reads} setCurrentCtgr={()=>this.setState({currentCtgr: "r"})} ctgr={this.state.currentCtgr} moveState={this.state.move} changeMove={(e)=>this.setMove(e)}  moveItem={(data)=>{
                  this.shiftCategories(data,"r")}} />
                  
              </div>
            </div>
            <BottomButton changePages={()=>this.setState({pages: "/search"})}/>
          </div>
        </Route>
      </div>
    )
  }
}

export default BooksApp
