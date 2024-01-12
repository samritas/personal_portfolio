import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard} from "./ProjectCard";
import projImg1 from "./assets/img/project-img1.png";
import projImg2 from "./assets/img/project-img2.png";
import projImg3 from "./assets/img/project-img3.png";
import projImg4 from "./assets/img/project-img4.png";
import projImg5 from "./assets/img/project-img5.png";
import projImg6 from "./assets/img/project-img6.png";
import colorSharp2 from "./assets/img/color-sharp2.png";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Netflix",
      description: "replicate the actual netflix ",
      imgUrl: projImg1,
      siteUrl:"https://samritas.github.io/Netflix_clone/",
    },
    {
      title: "Snak Game",
      description: "using pure html css and js",
      imgUrl: projImg2,
      siteUrl:"https://snakeegameee.netlify.app",
    },
    {
      title: "Amazon",
      description: "replicate the actual amazon",
      imgUrl: projImg3,
      siteUrl:"https://samritas.github.io/Amazon_clone/",
    },
    {
      title: "Apple home page",
      description: "using react class pase componnet",
      imgUrl: projImg4,
      siteUrl:"https://samritas.github.io/apple_home_page/",
    },
    {
      title: "QR code generator",
      description: "it gennerat QR code for any text and link",
      imgUrl: projImg5,
      siteUrl:" https://qrcodegeneratorrrr.netlify.app",
    },
    {
      title: "Evangadi Forem",
      description: "",
      imgUrl: projImg6,
      siteUrl:"/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                
                <h2>Projects</h2>
                <p>Explore my portfolio to witness a collection of web development and design projects. From sleek interfaces to innovative solutions, each project reflects my commitment to excellence and creativity. These endeavors tell a story of growth, innovation, and a dedication to turning ideas into reality.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Dive into my portfolio for a glimpse into my web development and design projects. Each one is a testament to my commitment to excellence and creative problem-solving. Discover the stories of growth, innovation, and dedication woven into these endeavors.
<br/>
Let's collaborate and create something extraordinary!

</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}