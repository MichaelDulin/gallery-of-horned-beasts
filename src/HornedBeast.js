import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './Main.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    }
  }

  handleLikes = () => {
    this.setState({
      likes: this.state.likes + 1
    });
  }

  handleHeaderClick = () => {
    this.props.handleOpenModal(this.props.name)
  }

  render() {
    return (
      <Col style={{ margin: '1.5rem' }}>
        <Card style={{ minWidth: '18rem' }}>
          <article className="hornedBeast">
            <h2>{this.props.name}</h2>
            <p>❤️{this.state.likes}</p>
            <p onClick={this.handleLikes}>Like!</p>
            <img
              src={this.props.imageURL}
              alt={this.props.keyword}
              onClick={this.props.handleHeaderClick}
              style={{ maxHeight: '12rem', maxWidth: '12rem' }}
            >{this.props.name}
            </img>
            <p>{this.props.description}</p>
            <p>Number of Horns: {this.props.horns}</p>
          </article>
        </Card>
      </Col>
    );
  }
}

export default HornedBeast;
