import "./Messenger.css"
import Conversation from "../conversations/Conversation";
import Message from "../message/Message";
import ChatOnline from "../chat-online/ChatOnline";
import { useState, useContext, useEffect } from "react";
import { AuthContext} from "../../context/AuthContext";
import axios from "axios";
import {socket} from "../../utils/api"

const ConversationList = (props) => {
    let list = `There is no channels to show`;
        if (props.conversations) {
            list = props.conversations.map(c => <Conversation key={c.id} id={c.id} name={c.name} participants={c.participants}></Conversation>)
        }

        return (
            <div className="conversation-list">
                {list}
            </div>
            )

}

const handleChannelSelect = id => {
    this.socket.emit('channel-join', id, ack => {
    });
}  


const Messenger = () => {
    const [ conversations, setConversations] = useState([]);
    const { user } = useContext(AuthContext);

    // useEffect(() => {
    //     socket.on('connection', () => {
    //         console.log(`I'm connected with the back-end`);
    //     })
    // }, [])

    return (
        <section className="container msg-container">
            <div className="chat-menu">
                <div className="chat-menu-wrapper">
                    <input placeholder="Conversations:" className="chat-menu-input"/>
                    {ConversationList({conversations: [{ id: 1, name: 'first', participants: 10 }]})}
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