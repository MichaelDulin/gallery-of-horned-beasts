import React from 'react';
import data from './data.json';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Container>
          <Row>
            <Main data={data} />
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}

// TEST: npm run start
export default App;