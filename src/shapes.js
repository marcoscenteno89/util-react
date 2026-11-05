import React, { useState, useRef, useEffect } from 'react';

const Square = (props) => {
  const sq = new CLS(props.className).add('square');
  const [ height, setHeight ] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const resize = () => setHeight(ref.current.clientWidth);
    window.addEventListener("resize", resize);
    resize();
    return () => window.removeEventListener('resize', resize);
  }, []);
  return (
    <div className="square-container">
      <div {...props} ref={ref} className={sq.prt()} style={{ height }}>
        {props.children}
      </div>
    </div>
  )
}