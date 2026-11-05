import React, {} from "react";

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

const Loading = (props) => {
  const style = {
    width: '100%',
    height: '100%'
  }
  let ready = true;
  for (let i of props.require) {
    if (!i) ready = false;
  }

  return ready ? props.children :  (
    <Square className="spinner-grow" style={style} role="status">
      <span className="visually-hidden">Loading...</span>
    </Square>
  );
}

const WebAlert = (props) => {
  if (!props.active) return null
  return (
    <Alert variant={props.variant}>
      <div dangerouslySetInnerHTML={{ __html: props.msg }} />
    </Alert>
  )
}

const WebModal = (props) => {
  const { title, children, show, setShow } = props;
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}


export { Square, Loading, WebAlert as Alert, WebModal as Modal };