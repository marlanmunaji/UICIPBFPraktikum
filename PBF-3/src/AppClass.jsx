import './App.css'
import React from 'react';

export default class AppClass extends React.Component {

  render() {
    return (
      <main>
        <h2>Belajar menggunakan JSX pada React</h2>
        <Header />

      </main>
    )
  }
}


class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Tutorial Reactjs untuk Pemula</h1>
        <h2>Panduan step-by-step belajar Reactjs</h2>
        <p>Membuat komponen dengan class</p>
        <Message sender="dian" content="Hi, Apa kabar?" />
      </div>
    );
  }
}

class Message extends React.Component {
  render() {
    return (
      <div>
        <small>{this.props.sender}:</small>
        <p>{this.props.content}</p>
        <hr />
      </div>
    );
  }
}
