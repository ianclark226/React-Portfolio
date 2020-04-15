import React from 'react';
import passgen from '../Images/passgen.png';
import note from '../Images/Note_Taker.png';
import buildboard from '../Images/buildboard.png';
import penny from '../Images/pennypincher.png';
import employee from '../Images/employee.png';
import budget from '../Images/budgettracker.png';

import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
        items: [
            {
                id: 0,
                title: 'Penny Pincher',
                subTitle: 'Money saving app',
                imgSrc: penny,
                link:'https://pennypincha.herokuapp.com',
                selected: false
            },
            {
                id: 1,
                title: 'Password Generator',
                subTitle: 'Generates a random password',
                imgSrc: passgen,
                link:'https://ianclark226.github.io/PasswordGenerator/',
                selected: false
            },
            {
                id: 2,
                title: 'Note Taker',
                subTitle: 'Keep track of notes',
                imgSrc: note,
                link:'https://nameless-coast-44707.herokuapp.com/',
                selected: false
            },
            {
                id: 3,
                title: 'Billboard',
                subTitle: 'Billboard API',
                imgSrc: buildboard,
                link:'https://dp95000.github.io/group-project-1/',
                selected: false
            },
            {
                id: 4,
                title: 'Employee Directory',
                subTitle: 'React',
                imgSrc: employee,
                link:'https://reacthw19.herokuapp.com/',
                selected: false
            },
            {
                id: 5,
                title: 'Budget Tracker',
                subTitle: 'Tracking with mongo',
                imgSrc: budget,
                link:'https://powerful-tor-58813.herokuapp.com/',
                selected: false
            }
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

export default Carousel;
