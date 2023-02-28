import React from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import './App.css';


class App extends React.Component {
  render() {

    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

// TEST: npm run start
export default App;