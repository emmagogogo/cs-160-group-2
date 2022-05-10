import "./Message.css"
import moment from 'moment';

const Message = ({own, message, time}) => {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="message-top">
                
                <img className={own ? "message-img hidden" : "message-img"} 
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
                    alt=""
                />
                <p className="message-text">{message}</p>
                <img className={own ? "message-img" : "message-img hidden"}
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
                    alt="" 
                />
            </div>
            <div className="message-bottom">{moment(time).fromNow()}</div>
        </div>
    )
};

export default Message;