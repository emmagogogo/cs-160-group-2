import React, {useState} from 'react';
import api from '../../utils/api'

function ProfilePicChanger(props) {

    let image = props.base64pic ? props.base64pic : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'

    let imgHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) { 
                api.post('/profile/picture', {profileImg: reader.result}).then(
                    () => {
                        alert("Uploaded pic!")
                    }
                );
            }
        }  
    
        reader.readAsDataURL(e.target.files[0]);
    }

    return (
        <span className='profile-img-container'>
            <img src={image} alt='profile' id='profile-img' className='img round-img' style={{margin: props.margin}} />
            <input type="file" name='image-upload' id='input' accept='image/*' onChange={imgHandler}/>
            <span className='label'>
            <label htmlFor='input' className='image-upload' style={{margin: props.margin+5}}>
                <i className='material-icons'>add_photo_alternate</i>
                Add your photo
            </label>
            </span>
        </span>
    );
}

export default ProfilePicChanger;