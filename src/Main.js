import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {

    return (
      <>
        <main>
          <HornedBeast
            name="Rhino"
            info="A large horned beast"
          />
          <HornedBeast
            name="Narwhal"
            info="An aquatic horned beast"
          />
          <HornedBeast
            name="Unicorn"
            info="A mythical horned beast"
          />
        </main>
      </>
    );
  }
}

export default Main;