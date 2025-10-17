import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/latest/MarketingApp';


const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    if(ref.current) {
      mount(ref.current)
    }
  }, [])

  return (
    <div ref={ref}/>
  )
}

export default MarketingApp