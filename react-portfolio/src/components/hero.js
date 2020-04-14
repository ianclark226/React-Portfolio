import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {

    return(
       <Jumbotron className="bg-transparent jumbotron-fluid p-0">
           <Container fluid={true}>
               <Row className="justify-content-center py-5">
                   <Col md={3} sm={12}>
                       { props.tite && <h1 className="display-1 font-weight-bolder">{props.title} </h1>}
                       { props.subTite && <h3 className="display-4 font-weight-light">{props.subTitle} </h3>}
                       { props.text && <h3 className="lead font-weight-bolder">{props.text} </h3>}
                   </Col>
               </Row>
           </Container>

       </Jumbotron>
    );
}

export default Hero;