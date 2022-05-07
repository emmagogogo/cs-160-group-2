import "./Message.css"

const Message = ({own}) => {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="message-top">
                
                <img className={own ? "message-img hidden" : "message-img"} 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtej8A8iI5h-E2JkZylE9Qm3aOZCQzXxhtrA&usqp=CAU" 
                    alt=""
                />
                <p className="message-text">Sample message</p>
                <img className={own ? "message-img" : "message-img hidden"}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtej8A8iI5h-E2JkZylE9Qm3aOZCQzXxhtrA&usqp=CAU" 
                    alt="" 
                />
            </div>
            <div className="message-bottom">1 hour ago</div>
        </div>
    )
};

export default Message;