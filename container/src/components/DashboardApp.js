import React, { useRef, useEffect } from 'react';
import { mount } from 'dashboard/DashboardApp';


const AuthApp = () => {
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

export default AuthApp