import React, { Component }  from 'react';
// import './App.css';
import './assets/css/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faPaperPlane, faSmileBeam, faCubes, faBomb, faBicycle, faCannabis } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee, faPaperPlane, faSmileBeam, faCubes, faBomb, faBicycle, faCannabis);

function App() {
  return (
    
    // <div className="container mainContainer">
    //   <div align="center">
    //   <img className ="Logo img-fluid" src={require(`./assets/images/Logo.png`)} alt="ChatBoxLogo"/>
    //   </div>
      
    //   <div className="row">
        
    //     <div className="col-3 leftcol">
    //     <img className ="userProfile img-fluid" src={require(`./assets/images/userStatic.png`)} alt="ChatBoxLogo"/>
    //     <p className="userName">Test User</p>
    //       <div className="row options">
            
    //         {/* <ul class="nav nav-tabs" align="center">
    //           <li class="nav-item">
    //             <a class="nav-link active" aria-current="page" href="#messages">CHATS</a>
    //           </li>
    //           <li class="nav-item">
    //             <a class="nav-link active" aria-current="page" href="#users">USERS</a>
    //           </li>
    //           <li class="nav-item">
    //             <a class="nav-link active" aria-current="page" href="#">FRIENDS</a>
    //           </li>
              
    //         </ul> */}


    //         <div className="col">
    //           <a href="#">CHAT</a>
    //         </div>
    //         <div className="col">
    //           <a href="#">USERS</a>
    //         </div>
    //         <div className="col">
    //           <a href="#">GROUPS</a>
    //         </div>
    //       </div>
    //       <div className="row">
    //         <div className=" messagesList" id="messages">
              
    //             <ul className ="messagesPreview">
    //               <a>
    //                 <li className="messagesContainer">
                    
    //                   <p><FontAwesomeIcon icon="bomb" size="2x"/> Message 1 </p>
    //                 </li>
    //               </a>
    //               <a>
    //                 <li className="messagesContainer">
    //                   <p><FontAwesomeIcon icon="cubes" size="2x"/> Message 2 </p>
    //                 </li>
    //               </a>
    //               <a>
    //                 <li className="messagesContainer">
    //                   <p><FontAwesomeIcon icon="bicycle" size="2x"/> Message 3 </p>
    //                 </li>
    //               </a>
    //               <a>
    //                 <li className="messagesContainer">
    //                 <p><FontAwesomeIcon icon="cannabis" size="2x"/> Message 4 </p>
    //                 </li>
    //               </a>
    //               <a>
    //                 <li className="messagesContainer">
    //                 <p><FontAwesomeIcon icon="cubes" size="2x"/> Message 5 </p>
    //                 </li>
    //               </a>
    //               <a>
    //                 <li className="messagesContainer">
    //                 <p><FontAwesomeIcon icon="bomb" size="2x"/> Message 6 </p>
    //                 </li>
    //               </a>
    //               <a>
    //                 <li className="messagesContainer">
    //                 <p><FontAwesomeIcon icon="bicycle" size="2x"/> Message 7 </p>
    //                 </li>
    //               </a>
    //               <a>
    //                 <li className="messagesContainer">
    //                 <p><FontAwesomeIcon icon="cubes" size="2x"/> Message 8 </p>
    //                 </li>
    //               </a>
    //               <a>
    //                 <li className="messagesContainer">
    //                 <p><FontAwesomeIcon icon="cannabis" size="2x"/> Message 9 </p>
    //                 </li>
    //               </a>
    //               <a>
    //                 <li className="messagesContainer">
    //                 <p><FontAwesomeIcon icon="cubes" size="2x"/> Message 10 </p>
    //                 </li>
    //               </a>
    //               <a>
    //                 <li className="messagesContainer">
    //                 <p><FontAwesomeIcon icon="cubes" size="2x"/> Message 11 </p>
    //                 </li>
    //               </a>
    //             </ul>
              
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-9 chatname">
    //       Chat Name
    //       <div className=" messageContainer">
           
    //           <div style={{width:"min-content"}}>
    //             <span className="sender">
    //              Hey
    //             </span>
    //           </div>
              
    //           <div style={{width:"100%",justifyContent:"flex-end", display:"flex"}}>
    //             <span className="receiver">
    //               Hey! How's it going?
    //             </span>
    //           </div>
              
    //           <div style={{width:"100%",justifyContent:"flex-end", display:"flex"}}>
    //             <span className="receiver">
    //               Heard you got a new car! 
    //             </span>
    //           </div>
              
    //           <div style={{width:"100%"}}>
    //             <p className="sender">
    //               Yes, I did. It is very fast and furious.Want to go for a spin? 🚗
    //             </p>
    //           </div>
              
    //           <div style={{width:"100%",justifyContent:"flex-end", display:"flex"}}>
    //             <p className="receiver">
    //               I would love to but my final project is due soon... 
    //             </p>
    //           </div>
              
    //           <div style={{width:"100%",justifyContent:"flex-end", display:"flex"}}>
    //             <p className="receiver">
    //               I am hoping it will be done by Thursday and we can definetly go after that if you are available.  
    //             </p>
    //           </div>
    //           <div>
    //             <p className="sender">
    //               Yes, that sounds great! Good luck on that project fam!
    //             </p>
    //           </div>
    //           <div style={{width:"100%",justifyContent:"flex-end", display:"flex"}}>
    //             <p className="receiver">
    //               Thank you so much 🥰  
    //             </p>
    //           </div>
            
    //       </div>
    //       <div className="container">
    //         <div className="row test2">
    //           <div className="col-1 icons">
    //             <a href="#">
    //               <FontAwesomeIcon icon="smile-beam" />
    //             </a>
    //           </div>
    //           <div className="col-10">
    //             <textarea class="form-control messageBox" placeholder="Type your message here" id="floatingTextarea">
                
    //             </textarea>
    //           </div>
    //           <div className="col-1 icons">
    //             <a href="#">
    //               <FontAwesomeIcon icon="paper-plane" />
    //             </a>
    //           </div>
            
            
    //         </div>
    //       </div>
          
    //     </div>
        
    //   </div>

    // </div>

    
  );
}

export default App;
