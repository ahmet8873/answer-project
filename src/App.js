
import { useState } from 'react';
import './App.css';
import SingleQuestion from './components/SingleQuestion';
import data from './data'

function App() {
const[questions,setQuestions]=useState(data)

  return (
    <main className='container'>
      <h1 className='title'>Questions And Answers</h1>
      <section className='info'>
          {questions.map((question)=>
          (<SingleQuestion key={question.id} {...question}  /> )
           )}

      </section>
      

      
    </main>
  );
}

export default App;
