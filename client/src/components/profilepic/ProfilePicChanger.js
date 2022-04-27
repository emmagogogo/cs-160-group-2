import React, {useState, useEffect} from 'react';
import { getCurrentProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const ProfilePicChanger = ({
    getCurrentProfile,
    auth: { user },
    profile: { profile }
  }) => {

    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);


    const [profileImg, setState] = useState(user.avatar);

    let imgHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
            setState(reader.result);  
            user.avatar = profileImg;     
            //console.log(profileImg);       
            }
        }  
        
        //console.log(user);
        reader.readAsDataURL(e.target.files[0]);
    }

    return (
        <span className='profile-img-container'>
            <img src={profileImg} alt='profile' id='profile-img' className='img round-img'/>
            <input type="file" name='image-upload' id='input' accept='image/*' onChange={imgHandler}/>
            <span className='label'>
            <label htmlFor='input' className='image-upload'>
                <i className='material-icons'>add_photo_alternate</i>
                Add your photo
            </label>
            </span>
        </span>
    );
}


ProfilePicChanger.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    //deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(
    ProfilePicChanger
);