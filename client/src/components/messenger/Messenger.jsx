import "./Messenger.css"
import Conversation from "../conversations/Conversation";
import Message from "../message/Message";
import ChatOnline from "../chat-online/ChatOnline";
import { useState, useContext, useEffect } from "react";
import api from '../../utils/api';


const Messenger = () => {
    const [ conversations, setConversations] = useState([]);
    const userid = JSON.parse(localStorage.getItem('id'));

    useEffect(() => {
        const getConversations = async () => {
          try {
            const res = await api.get("/conversations/" + userid);
            console.log(res.data)
            setConversations(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getConversations();
      }, [userid]);

    return (
        <section className="container msg-container">
            <div className="chat-menu">
                <div className="chat-menu-wrapper">
                    <input placeholder="Conversations:" className="chat-menu-input"/>
                    {conversations.map((c) => (
                        <Conversation conversation={c} currentUser={userid} />
                    ))}
    
                </div>
            </div>
            <div className="chat-box">
                <div className="chat-box-wrapper">
                    <div className="chat-box-top">
                        <Message />
                        <Message own={true}/>
                        <Message />
                        <Message own={true}/>
                        <Message />
                        <Message own={true}/>
                        <Message />
                        <Message own={true}/>
                        <Message />
                        <Message own={true}/>
                        <Message />
                        <Message own={true}/>
                        <Message />
                    </div>
                    <div className="chat-box-bottom">
                        <textarea className="chat-message-input" placeholder="Message"></textarea>
                        <button className="chat-submit-button">Send</button>
                    </div>
                </div>
            </div>
            <div className="chat-online">
                <div className="chat-online-wrapper">
                    <ChatOnline />
                    <ChatOnline />
                    <ChatOnline />
                </div>
            </div>
        </section>
    )
};

export default Messenger;