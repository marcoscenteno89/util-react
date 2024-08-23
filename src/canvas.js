import React, { useState, useEffect, useRef } from 'react';
import { CanvasManager } from "@marccent/util/canvas";
/**
 * Higher-order component that wraps a component with canvas functionality.
 * @param {React.Component} Component - The component to be wrapped.
 * @returns {React.Component} - The wrapped component.
 */
const withCanvas = (Component) => {
  const WithCanvasComponent = (props) => {
    const ref = useRef(null);
    const [ sketch, setSketch ] = useState(null);
    const cls = props.canvasCls ? props.canvasCls.split(' ') : [];
    // cls.push('canvas-container');

    useEffect(() => {

      /**
       * Initializes the canvas and sets up the sketch.
       * @returns {Promise<void>} A promise that resolves once the canvas is initialized.
       */
      
      const init = async () => {
        const data = {};
        data.p5 = (await import("p5")).default;
        data.sketch = new data.p5((p) => data.p = p);
        data.canvas = new CanvasManager(data.p5, data.p, ref.current);
        setSketch(data);
      }
      init();
    }, []);
    return (
      <div className={cls.join(' ')}>
        <canvas ref={ref}></canvas>
        <Loading require={[sketch]}>
          <Component {...props} cavasRef={ref} sketch={sketch} />
        </Loading>
      </div>
    );
  }
  return WithCanvasComponent;
}