import "./Conversation.css"
import { useEffect, useState } from "react";
import api from '../../utils/api';


const Conversation = ({conversation, currentUser}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser);
    
        const getUser = async () => {
          try {
            const res = await api.get(`/users/${friendId}`);
            console.log(friendId);
            setUser(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getUser();
      }, [currentUser, conversation]);
    return (
        <div className="conversation">
            <img className="conversation-img" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtej8A8iI5h-E2JkZylE9Qm3aOZCQzXxhtrA&usqp=CAU" 
                alt="" 
            />
            <span className="conversationName">{user ? user.name : ""}</span>
        </div>
    )
};

export default Conversation;