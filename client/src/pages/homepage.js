import React from 'react';
import '../assets/css/index.css';
import Auth from '../utils/auth';
import { Chat } from '../components/chat';
import { QUERY_ME, QUERY_ALLUSERS,CHAT_ROOM, QUERY_SINGLE_MESSAGE_SENDER, } from '../utils/queries';
// import { POST_MESSAGE } from '../utils/mutations';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Button } from 'react-bootstrap';
import { faCheckSquare, faCoffee, faPaperPlane, faSmileBeam, faCubes, faBomb, faBicycle, faCannabis } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faCheckSquare, faCoffee, faPaperPlane, faSmileBeam, faCubes, faBomb, faBicycle, faCannabis);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function HomePage() {
  // default values for testing
  const senderID= '6147443274fed355f8b5ba06'
  const receiverID = '61479ea77972ec219082d94a'
  const roomID = '614bd97074c9cd69780dd4ef';
  
  const { data: userData } = useQuery(QUERY_ME);
  const { loading, data } = useQuery(QUERY_ALLUSERS);
  const { data: chatData } = useQuery(QUERY_SINGLE_MESSAGE_SENDER, {
    variables: { roomID: roomID}
  });
  const { data: roomData} = useQuery(CHAT_ROOM , 
    { variables: 
      { senderID: senderID, receiverID: receiverID }
    }
  )
  // const [postMessage] = useMutation(POST_MESSAGE, {
  //   variables: { senderID: senderID, receiverID: receiverID, message: message }
  // });

  console.log(chatData);

  const users = data?.users || [];
  const chat = chatData?.message || [];
  const loggedIn = Auth.loggedIn();

  //console.log(loggedIn)
  console.log(users)
  console.log(chat)

    // setFormState({
    //   // ...formState,
    //   // [name]: value,
    // });
  // };

  const ChatPage = (senderID, receiverID) => {

    // const handleClick = aysnc () => {
    //   try {
    //     await postMessage({
    //       variables: { senderID: senderID, receiverID:receiverID, message:message }
    //     });
    //   } catch (e) {
    //     console.error(e);
    //   }
    // };
    // console.log(senderID)
    // console.log(receiverID)
    return (
      <div>
      <div style={{width:"100%"}}>
          {/* <SenderMessages
              // senderID={senderID}
              // receiverID={receiverID}
          /> */}
           {/* {chat.map(cht => (<p className="sender"><p>{cht.message}</p>{cht.username}</p>))}  */}
           <div style={{width:"100%"}}>
                {/* <p className="sender">
                  Yes, I did. It is very fast and furious.Want to go for a spin? 🚗
                </p> */}
              </div>
            </div>    
      <div style={{width:"100%",justifyContent:"flex-end", display:"flex"}}>
        <p className="receiver">
          {/* <ReceiverMessages/>   */}
          {loggedIn && chat ? <p>Hello </p>: null}
        </p>
      </div>     
    </div> 
    )
  }

  ///main return code

  return (
    <div className="container mainContainer">
      <div align="center">
        <img className="Logo img-fluid" src={require(`../assets/images/Logo.png`)} alt="ChatBoxLogo" />
      </div>
      <div className="row">
        <div className="col-3 leftcol">
          <img className="userProfile img-fluid" src={require(`../assets/images/userStatic.png`)} alt="ChatBoxLogo" />
          <div className="userName">{loggedIn && userData ? <p className="col-12 col-lg-3 mb-3">{capitalizeFirstLetter(userData.me.username)} </p> : null}</div>
          <div className="row options">
            <div className="col">
           USERS
            </div>
          </div>
          {/* I SUGEST WE CHANGE THE CODE BELOW FROM USER TO THE FREINDS ARRAY OF THE USER LOGGED IN  */}
          <div className="row">
          <div className=" messagesList">                 
            {users.map(user => (
                <ul className ="messagesPreview">
                  <a>     
                    <li className="messagesContainer">
                 <Button
                type='submit'
                id="startChatting"
                variant='success'
                onSubmit={ChatPage} 
                >
                {capitalizeFirstLetter(user.username)}
                {/* {loggedIn && userData ? <> {userData.me.friends} </> : null} */}
                {/* Trying to see if I can render only the firneds list. 
                Feel free to comment out the code on line 74 and 66 and 55 if it does not work and comment in line 67  */}
              </Button>
                    </li>
                  </a>
                </ul>
               ))}
          </div>
        </div>
        </div>

        <div className="col-9 chatname">
          Chat
{/* Old label
Chat name */}
          <div className="container messageContainer">
            {ChatPage()}
          </div>
            <div className="container">
            <form className="row test2" >
              <div className="col-1 icons">
                <a href="#">
                  <FontAwesomeIcon icon="smile-beam" />
                </a>
              </div>
              <div className="col-10">
                <textarea className="form-control messageBox" placeholder="Type your message here" id="floatingTextarea">
                </textarea>
              </div>
              <div className="col-1 icons">
                <a>
                  <FontAwesomeIcon icon="paper-plane" />
                </a>
              </div>
            </form>
            </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;

// {users.map(user => (
//   <ul className ="messagesPreview">
//     <a>     
//       <li className="messagesContainer">
//         <Button
//           type='submit'
//           id={(user._id)}
//           variant='success'
//           onClick={()=>ChatPage(user._id,userData.me._id)}
//         >
//         {capitalizeFirstLetter(user.username)}
//         {/* {loggedIn && data ? <> {data.me.friends} </> : null} */}
//         {/* Trying to see if I can render only the firneds list. 
//         Feel free to comment out the code on line 74 and 66 and 55 if it does not work and comment in line 67  */}
//         </Button>
//       </li>
//     </a>
//   </ul>
// ))}