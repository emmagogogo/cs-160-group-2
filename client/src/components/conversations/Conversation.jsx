import "./Conversation.css"

const Conversation = (props) => {
    let click = () => {
        props.onClick(props.id);
    }

    return (
        <div className="conversation" onClick={click}>
            <img className="conversation-img" 
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
                alt="" 
            />
            <span className="conversation-text">{props.name}</span>
        </div>
    )
};

export default Conversation;