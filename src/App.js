import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

function App() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="play-blocks mobile-phone">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://sixergame.com/static/media/app_ss_2.c919c778.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://sixergame.com/static/media/app_ss_3.fda4aee9.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
          <Col>
            <div style={{ backgroundColor: "black" }}>
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img className="d-block w-100" src="" alt="First slide" />
                  <Carousel.Caption>
                    <h3>Fantasy cricket label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src="" alt="Second slide" />

                  <Carousel.Caption>
                    <h3>consistent cricket label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src="" alt="Third slide" />

                  <Carousel.Caption>
                    <h3>final slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
