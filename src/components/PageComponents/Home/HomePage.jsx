import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeCard from './HomeCard'
import Fade from "react-reveal/Fade";


import LazyHero from 'react-lazy-hero'





const HomePage = (props) => (
  <>

    <Container >
      <Row>
        <Col className="NoMobile"  xs={3} />
        <Col>
        <Fade ssrReveal>

            <HomeCard />
            </Fade>

        </Col>
        <Col className="NoMobile" xs={3}/>
      </Row>
    </Container>
  </>
);

export default HomePage;
