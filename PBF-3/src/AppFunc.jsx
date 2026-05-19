import './App.css'

export default function AppFunc() {

  const element = <h1>Hello, world</h1>;

  return (
    <main>
      <h2>Belajar menggunakan JSX pada React</h2>
      <Header />

    </main>
  )
}


function Header() {
  return (
    <div>
      <h1>Tutorial Reactjs untuk Pemula</h1>
      <h2>Function Component</h2>
      <Message sender="dian" content="Hi, Apa kabar?" />
    </div>
  );
}

function Message(props) {
  return (
    <div>
      <small>{props.sender}:</small>
      <p>{props.content}</p>
      <hr />
    </div>
  );

}
