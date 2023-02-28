import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
  render() {

    let beasts = [];
    this.props.data.forEach((beast) => {
      beasts.push(
        <HornedBeast
          name={beast.title}
          imageURL={beast.image_url}
          keyword={beast.keyword}
          description={beast.description}
          horns={beast.horns}
          key={beast._id}
        />
      )
    })
    return (
      <>
        <body>
          <Container>
            <Row>
              <main>
                {beasts}
              </main>
            </Row>
          </Container>
        </body>
      </>
    );
  }
}

export default Main;