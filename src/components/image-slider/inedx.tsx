import React, { ReactNode } from 'react';
import { SlideWrapper } from './image-slider.style';

const ImageSlider = ({ children, SliderHeight }: { children: ReactNode , SliderHeight?:number }) => {
  const screenWidth = screen.width;
  return (
    <div style={{position:'relative', height:SliderHeight? SliderHeight:'', transform:'translateX(-20px)'}}>
      <div style={{ maxWidth: screenWidth, position: 'absolute' }}>
        <SlideWrapper>
          <div style={{width:8}} />
          {children}
        </SlideWrapper>
      </div>
    </div>
  );
};

export default ImageSlider;
