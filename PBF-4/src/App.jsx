import './App.css'
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';

export default function App() {
  return (
    <main>
      <h3>Belajar React</h3>
      {/*<EventExample />*/}
      {/*<GenerateRandomName />*/}
      {/*<ConditionalExample isLoading={false} />*/}
      {<ListKeyExample />}

    </main>
  )
}


function ListKeyExample() {
  const phoneData = [
    { name: "iPhone X", price: 10000000, discount: 50 },
    { name: "Oppo Find X", price: 14000000, discount: 30 },
    { name: "Redmi Note X", price: 5000000, discount: 42 },
    { name: "Vivo XYZ", price: 10000000, discount: 0 },
  ];

  return (
    <div>
      {
        phoneData.map(data => {
          return (
            <Product
              key={data.name}
              name={data.name}
              price={data.price}
              discount={data.discount}
            />
          )
        })
      }
    </div>
  )

}


function Product({ name, price, discount = 0 }) {
  return (
    <div>
      <h2>{name}</h2>
      {discount > 0 && <p><s>Rp {price}</s> ({discount}%)</p>}
      <p>
        <b>
          Rp {parseInt(price) - parseInt(price) * (parseInt(discount) / 100)}
        </b>
      </p>
      <hr />
    </div>
  );
}



function ConditionalExample(props) {
  if (props.isLoading) {
    return <LoadingView />
  } else {
    return <LoggedView />
  }
}


function LoadingView() {
  return (
    <h2>Loading...</h2>
  )
}

function LoggedView() {
  const random = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });
  return <h2>Welcome {random}</h2>
}


function GenerateRandomName() {
  let randomName

  function createRandomName() {
    randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });
    alert(`Random Name: ${randomName}`)
  }

  return (
    <button onClick={createRandomName}>Generate Random Name</button>
  )
}


function EventExample() {

  let email = ""

  function handleClick() {
    alert('Email: ' + email)
  }


  function handleChange(event) {
    email = event.target.value;
  }


  return (
    <div>
      <h4>Menangani Event</h4>
      <input onChange={(event) => {
        handleChange(event)
      }} type="email" />
      <button onClick={() => {
        handleClick()
      }}>Tampilkan Email</button>
    </div>
  )
}