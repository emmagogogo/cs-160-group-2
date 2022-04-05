import "./ChatOnline.css"

const chatOnline = ({own}) => {
    return (
        <div className="chat-online">
            <div className="chat-online-friend">
                <div className="chat-online-img-container">
                    <img
                        className="chat-online-img"                     
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtej8A8iI5h-E2JkZylE9Qm3aOZCQzXxhtrA&usqp=CAU" 
                        alt="" 
                        />
                    <div className="chat-online-badge"></div>
                </div>
                <div className="chat-online-name">Someone's name</div>
            </div>
        </div>
    )
};

export default chatOnline;