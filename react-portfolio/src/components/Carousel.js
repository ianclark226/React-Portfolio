import React from 'react';
import passgen from '../Images/passgen';
import quiz from '../Images/quiz';
import weather from '../Images/weather';

import Card from '../components/Card';

class Carousel extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
        items: [
            {
                id: 0,
                title: 'Password Generater',
                subTitle: 'Random Process',
                imgSrc: passgen,
                link:'https://github.com/ianclark226/PasswordGenerator',
                selected: false
            },
            {
                id: 1,
                title: 'Pokemon TCG Quiz',
                subTitle: 'Know your cards',
                imgSrc: quiz,
                link:'https://github.com/ianclark226/PokemonTCGQuiz',
                selected: false
            },
            {
                id: 2,
                title: 'Weather Dashboard',
                subTitle: 'Hows the weather up there?',
                imgSrc: weather,
                link:'https://github.com/ianclark226/WeatherAPI',
                selected: false
            }
        ]

    }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !==id ) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });

        makeItems = (items) => {
            return items.map(item => {
                return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
            })

        }


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

export default Carousel;
