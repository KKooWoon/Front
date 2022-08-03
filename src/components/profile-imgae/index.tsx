import React from 'react';
import defaultImg from '@assets/images/default-image.png';


const ProfileImage = ({url, alt}:{url:string | null, alt?:string}) => {
  if(url === null){
    return <img src={defaultImg} alt='defualt_img' />
  }
  return (
    <img src={url} alt={alt? alt : "null"} />
  )
}

export default ProfileImage;