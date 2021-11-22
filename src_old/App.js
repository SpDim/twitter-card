// import logo from './tweet-icon.svg';
import './App.css';
import React from 'react';
import { ReactComponent as Tweet} from './icons8-twitter.svg';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

const  App = () => {
  return (
    <div className="App">
        <Header />
      <div className="twitter">
          <Tweet style={{alignSelf: "center", maxWidth: "90%"}}/>
          <Body />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
