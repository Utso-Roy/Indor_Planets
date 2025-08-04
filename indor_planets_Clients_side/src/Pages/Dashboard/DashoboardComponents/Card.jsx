import React from "react";
import ProfileCard from '../../../Components/ProfileCard/ProfileCard'
const Card = () => {
  return (
    <div >
      <ProfileCard
      
        name="Javi A. Torres"
        title="Software Engineer"
        handle="javicodes"
        status="Online"
        contactText="Contact Me"
        avatarUrl="https://i.ibb.co/Z6mPwRG4/Utso-Roy.jpg"
        showUserInfo={true}
        enableTilt={true}
        enableMobileTilt={false}
      />
    </div>
  );
};

export default Card;
