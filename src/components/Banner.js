import React,{useState,useEffect} from 'react'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { Container, Row, Col } from "react-bootstrap";
import bannerimg from './assets/img/header-img.svg'

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Full Stack Web Developer"  ];
  const period = 2000;
  const containerStyle={
    borderRadius: '50%',
    // width: '100px',  // Set the width of the container
    // height: '100px', // Set the height of the container
    // overflow: 'hidden'
  }

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
    <Container>
      <Row className="aligh-items-center">
        <Col xs={12} md={6} xl={7}>
        
           
            <div >
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>{`Hi! I'm samrawit`} <br/> <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full Stack Web Developer" ]'><span className="wrap">{text}</span></span></h1>
                <p>Hey there! 👋 I'm samrawit, a budding full-stack web developer passionate about crafting dynamic and user-friendly web applications. Proficient in HTML, CSS, JavaScript, react , Node.js, and Express. Eager to contribute innovative solutions, learn from experienced developers, and stay on top of industry trends. Let's connect and explore the world of web development together! 🚀

</p>
                <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
            </div>
          
        </Col>
        <Col xs={12} md={6} xl={5}>
       
            
              <div >
                <img src={bannerimg} alt="Header Img" />
              </div>
         
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default Banner
