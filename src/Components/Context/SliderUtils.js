export const goToNext = (sliderRef) => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  
  export const goToPrevious = (sliderRef) => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  