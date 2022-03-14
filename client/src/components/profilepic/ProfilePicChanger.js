import React, {useState} from 'react';

function ProfilePicChanger(props) {

    const [profileImg, setState] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png');

    let imgHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
            setState(reader.result);       
            console.log(profileImg);       
            }
        }  
    
        reader.readAsDataURL(e.target.files[0]);
    }

    return (
        <div className='profile-img-container'>
            <img src={profileImg} alt='profile' id='profile-img' className='img round-img' style={{margin: props.margin}} />
            <input type="file" name='image-upload' id='input' accept='image/*' onChange={imgHandler}/>
            <span className='label'>
            <label htmlFor='input' className='image-upload' style={{margin: props.margin+5}}>
                <i className='material-icons'>add_photo_alternate</i>
                Add your photo
            </label>
            </span>
        </div>
    );
}

export default ProfilePicChanger;