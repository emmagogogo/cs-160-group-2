import "./Messenger.css"
import Conversation from '../conversations/Conversation';
import Message from "../message/Message";


const Messenger = () => {

    return (
        <section className="container msg-container">
            <div className="chat-menu">
                <div className="chat-menu-wrapper">
                    <input placeholder="start chatting" className="chat-menu-input"/>
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
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
                        <textarea className="chat-message-input" placeholder="write somthing..."></textarea>
                        <button className="chat-submit-button">Send</button>
                    </div>
                </div>
            </div>
            <div className="chat-online">
                <div className="chat-online-wrapper">
                    
                </div>
            </div>
        </section>
    )
};

export default Messenger;