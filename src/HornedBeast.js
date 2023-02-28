import React from 'react';

class HornedBeast extends React.Component {
  render() {

    return (
      <>
        <article>
          <h2>{this.props.name}</h2>
          <p>{this.props.info}</p>
        </article>
      </>
    );
  }
}

export default HornedBeast;