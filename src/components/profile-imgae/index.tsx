import React from 'react';
import defaultImg from '@assets/images/default-image.png';


const ProfileImage = ({url, alt}:{url:string | null, alt?:string}) => {
  if(url === null){
    return <img style={{borderRadius:'50%'}} src={defaultImg} alt='defualt_img' />
  }
  return (
    <img style={{borderRadius:'50%'}} src={url} alt={alt? alt : "null"} />
  )
}

export default ProfileImage;