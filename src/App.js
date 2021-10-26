/** @format */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './images/logo.png';
import Post from './components/Post';

import testImg from './images/test.jpeg';
import avatar from './images/SeolHiKim.jpeg';

//CSS
import './App.scss';

const App = () => {
  const username = 'Seolcita';
  const caption =
    'przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją';

  return (
    <div className="app">
      <div className="app__header">
        <div className="app__header__logo">
          <img
            className="app__header__logo--img"
            src={logo}
            alt="header image"
          />
          <span className="app__header__logo--title">Seolstagram</span>
        </div>
        <div className="app__header__auth">
          <span className="app__header__auth--status">Login</span>
        </div>
      </div>
      <Post
        username={username}
        imageUrl={testImg}
        avatar={avatar}
        caption={caption}
      />
    </div>
  );
};

export default App;
