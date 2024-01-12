import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

export const ProjectCard = ({ title, description, imgUrl, siteUrl }) => {
  const handleClick = () => {
    window.location.href = siteUrl;
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={handleClick}>
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};