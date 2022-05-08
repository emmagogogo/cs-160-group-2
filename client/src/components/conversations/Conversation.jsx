import "./Conversation.css"

const Conversation = (props) => {
    let click = () => {
        props.onClick(props.id);
    }

    return (
        <div className="conversation" onClick={click}>
            <img className="conversation-img" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtej8A8iI5h-E2JkZylE9Qm3aOZCQzXxhtrA&usqp=CAU" 
                alt="" 
            />
            <span className="conversation-text">{props.name}</span>
        </div>
    )
};

export default Conversation;