import React from 'react';
import data from './data.json';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beastName: ''
      // beastImgURL: '',
      // beastDescription: ''
    }
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  handleOpenModal = (name) => {
    this.setState({
      showModal: true,
      beastName: name
    })
  }

  render() {
    return (
      <>
        <Header />
        <Container>
          <Row>
            <Main data={data} handleOpenModal={this.handleOpenModal} />
          </Row>
        </Container>
        <Footer />
        <Modal
          show={this.state.showModal}
          onHide={this.handleCloseModal}
        >
          <Modal.Header>
            <Modal.Title>
              {this.state.name}
            </Modal.Title>
          </Modal.Header>
          {/* {this.state.imageURL}
          {this.state.description} */}
        </Modal>
      </>
    );
  }
}

// TEST: npm run start
export default App;