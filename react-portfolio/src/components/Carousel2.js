import Resume from'../Images/updatedresume.png';
import Linkin from '../Images/linkedin.png';
import Github from '../Images/github.png';
import React from 'react';
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel2 extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
        items: [
            {
                id: 0,
                title: 'Resume',
                subTitle: 'Fullstack',
                imgSrc: Resume,
                link:'https://docs.google.com/document/d/1wHuvET1MeD4HtsYKUOrnNkz4KT9B_yLjlM4s7KBga7Q/edit',
                selected: false
            },
            {
                id: 1,
                title: 'LinkedIn',
                subTitle: 'profile',
                imgSrc: Linkin,
                link:'https://www.linkedin.com/in/ianclark226/',
                selected: false
            },
            {
                id: 2,
                title: 'GitHub',
                subTitle: 'profile',
                imgSrc: Github,
                link:'https://github.com/ianclark226',
                selected: false
            },
           
        ]

    }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

        makeItems = (items) => {
            return items.map(item => {
                return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
            })

        }


    


render() {
    return(
        <Container fluid={true}>
            <Row className= "justify-content-around">
                {this.makeItems(this.state.items)}
            </Row>
        </Container>
    );
}
}

export default Carousel2;