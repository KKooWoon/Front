import ImageSlider from '@components/image-slider/inedx';
import { WorkOut } from '@typings/workout';
import React from 'react';
import { Description, ImageBackround } from './workout.style';
interface Props {
  data: Array<WorkOut>;

}
export const PreviewItem = ({item}:{item:WorkOut}) =>{

  return (
    <ImageBackround img_url={`${process.env.REACT_APP_IMAGE_BACK_URL}${item.img_Url}`}>
      <Description>
        <h2>{item.nick_name}</h2>
        <p>{item.message}</p>
      </Description>
    </ImageBackround>
  )
}

const PreviewWorkOut = ({data}:Props) => {
  /* 벡엔드에서 최근 운동 리스트 받아옴 */
  return (
    <div style={{position:"relative"}}>
      <ImageSlider SliderHeight={180}>
        {
          data.map((v,i)=>(
            <PreviewItem key={i} item={v} />
          ))
        }
      </ImageSlider>
    </div>
  );
};

export default PreviewWorkOut;
