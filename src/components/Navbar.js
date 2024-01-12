import React,{useEffect,useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import nav1 from './assets/img/nav-icon1.svg'
import nav2 from './assets/img/nav-icon2.svg'
import nav3 from './assets/img/nav-icon3.svg'
import navimg from './assets/img/navimg.png'
import { HashLink } from 'react-router-hash-link';


function Navigationbar() {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }


  return (
    <Navbar expand="lg"  className={scrolled ? "scrolled" : ""}>
    <Container>
      <Navbar.Brand href="#home">
        
        <img src={navimg}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" >
        <span className='navbar-toggle-icon'></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skills"  className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>skills</Nav.Link>
          <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>projects</Nav.Link>
        
        </Nav>
        <span className='navbar-text'>
            <div className='social-icon'>
                <a href='#'><img src={nav1}/></a>
                <a href='#'><img src={nav2}/></a>
                <a href='#'><img src={nav3}/></a>
            </div>
            <Nav.Link href='#connect'>
            {/* <HashLink to='#connect'> */}
                <button className="vvd"><span>Let’s Connect</span></button>
              {/* </HashLink> */}
              </Nav.Link>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigationbar
