import React from 'react';
import './styles/App.css';

let name: string;
let age: number;
let isStudent: boolean;
let hobbies: string[];
let numberOfIndex: number[];
let role: [number, string];

// variables
name = 'Erica';
age = 23;
isStudent = true;
hobbies = ['Erica', 'Ghana', 'Essel', 'sisi'];
numberOfIndex = [1, 32, 23, 4, 23, 132, 23, 24, 32323, 24, 232, 3];
role = [5, 'five'];

//objects

type Person = {
  name: string;
  age: number;
}

let person: Person= {
  name: 'John',
  age: 22,
}

function App() {
  return (
    <div className='App'>
      <p>Hello World</p>
    </div>
  );
}

export default App;
