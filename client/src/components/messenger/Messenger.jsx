import "./Messenger.css"
import Conversation from "../conversations/Conversation";
import Message from "../message/Message";
import ChatOnline from "../chat-online/ChatOnline";
import { useState, useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import api from "../../utils/api"
import { socket } from "../../utils/api"




const ConversationList = (props) => {
    let list = `There is no channels to show`;
    if (props.conversations) {
        list = props.conversations.map(c => <Conversation key={c.id} id={c.id} name={c.otherUser.name} participants={c.participants} onClick={props.handleChannelSelect}></Conversation>)
    }

    return (
        <div className="conversation-list">
            {list}
        </div>
    )

}

const MessageList = (props) => {
    let currentUser = props.currentUser
    let list = `There are no messages to show`;

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [props.messages]);

    if (props.messages) {
        list = props.messages.map(msg => <Message key={msg.updatedAt} id={msg.updatedAt} own={msg.sender == currentUser} message={msg.text} time={msg.updatedAt}/>)
    }

    return (
        <div className="chat-box-top">
        {list}
        <div ref={messagesEndRef} />
         </div>
    )

}


const Messenger = () => {
    const [conversations, setConversations] = useState([]);
    const [currentConversation, setCurrentConversation] = useState("")
    const [messages, setMessages] = useState([])
    const [textBox, setTextBox] = useState("")
    const user = localStorage.getItem("id").replace(/^"(.*)"$/, '$1') //get user and trim double quotes

    const handleChannelSelect = id => {
        setCurrentConversation(id)
        api.get(`/messages/${id}`).then(res => {
            setMessages(res.data)
        })
        // this.socket.emit('channel-join', id, ack => {
        // });
    }

    const sendMessage = (msg) => {
        if(currentConversation){
            api.post("/messages", {
                conversationId: currentConversation,
                sender: user,
                text: msg
            }).then(res => {
                handleChannelSelect(currentConversation)
            }).catch(e => alert(e))
        }
        
    }

    useEffect(() => {
        api.get("/conversations").then((res) => {
            let data = res.data.map((conv) => { return { ...conv, id: conv._id, otherUser: conv.userInfo.filter((u) => u != user)[0] } })
            setConversations(data)
        })

    }, [])

    return (
        <section className="container msg-container">
            <div className="chat-menu">
                <div className="chat-menu-wrapper">
                    <input placeholder="Conversations:" className="chat-menu-input" />
                    {/* <ConversationList conversations={conversations.map((conv) => {
                            return { ...conv, id: conv._id, name: conv.otherUser.name, onClick: () => console.log(conv._id)}
                        })}/> */}
                    <ConversationList conversations={conversations} handleChannelSelect={handleChannelSelect}/>
                </div>
            </div>
            <div className="chat-box">
                <div className="chat-box-wrapper">
                    <div className="chat-box-top">
                        <MessageList currentUser={user} messages={messages}/>
                    </div>
                    <div className="chat-box-bottom">
                        <textarea onChange={(e) => {setTextBox(e.target.value)}} value={textBox} className="chat-message-input" placeholder="Message"></textarea>
                        <button onClick={() => {
                            setTextBox("")
                            sendMessage(textBox)
                        }} className="chat-submit-button">Send</button>
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