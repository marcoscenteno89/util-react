import React, { useState, useEffect, useRef } from 'react';

const Square = (props) => {
  const [ height, setHeight ] = useState(0);
  const ref = useRef(null);
  const cls = props.className.split(' ').push('square');
  useEffect(() => {
    window.addEventListener("resize", setHeight(ref.current.clientWidth));
  }, [height]);
  return (
    <div {...props} ref={ref} className={cls.join(' ')} style={{ height }}>
      {props.children}
    </div>
  )
}

export { Square };