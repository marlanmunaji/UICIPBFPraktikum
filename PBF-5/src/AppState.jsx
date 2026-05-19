import './App.css'
import React, { useState } from 'react';
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';


const customConfig = {
  dictionaries: [adjectives, colors, animals],
  separator: ' ',
  length: 3,
};

export default function AppState() {

  const [randomName, setRandomName] = useState();


  function generateRandomName() {
    const generatedName = uniqueNamesGenerator(customConfig);
    setRandomName(generatedName)
  }

  return (
    <main>
      <h1>Belajar React Hook</h1>
      <p>Random Name Generator</p>
      {
        randomName && <h3>{randomName}</h3>
      }
      <button
        style={{ alignSelf: 'center' }}
        onClick={generateRandomName}
      >
        Generate Random Name
      </button>
    </main>
  )


}
