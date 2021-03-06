import React from 'react';
import PropTypes from 'prop-types';
import {MessageOutlined} from '@ant-design/icons';
//import { Link } from 'react-router-dom';
import{ useNavigate } from "react-router-dom";
import api from '../../utils/api';

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    profileImg,
    user: { name,avatar, _id }
  }

  
}) => {
  const navigate = useNavigate();
  console.log(_id);
  return (
    <div className="profile-top bg-primary p-2">
      <img className="round-img my-1" src={profileImg ? profileImg : avatar}  alt="" />  
      <h1 className="large">{name}</h1>
      <p className="lead">
        {status} {company ? <span> at {company}</span> : null}
      </p>
      <p>{location ? <span>{location}</span> : null}</p>
      <div className="icons my-1">
        {website ? (
          <a href={website} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe fa-2x" />
          </a>
        ) : null}
        {social
          ? Object.entries(social)
              .filter(([_, value]) => value)
              .map(([key, value]) => (
                <a
                  key={key}
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab fa-${key} fa-2x`}></i>
                </a>
              ))
          : null}
        </div>
        <MessageOutlined style={{ fontSize: '250%', color: 'white'}} onClick={()=>{
          api.post(`/conversations`, {receiverId:_id}).then((response) => {navigate("/messenger")
        })}}/>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;
