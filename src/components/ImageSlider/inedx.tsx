import React, { ReactNode } from 'react';
import { SlideWrapper } from './image-slider.style';

const ImageSlider = ({ children, SliderHeight }: { children: ReactNode , SliderHeight?:number }) => {
  const screenWidth = screen.width;
  return (
    <div style={{position:'relative', height:SliderHeight? SliderHeight:''}}>
      <div style={{ maxWidth: screenWidth - 20, position: 'absolute' }}>
        <SlideWrapper>{children}</SlideWrapper>
      </div>
    </div>
  );
};

export default ImageSlider;
