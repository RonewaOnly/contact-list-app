import './App.css';
import React, { useState,useEffect } from 'react'
import { ContactCard } from './ContactCard';

function App() {

  //const contacts =[
  //  {
  //    avatarUrl: 'https://via.placeholder.com/150',
  //    name:'Jenny Sum',
  //    email:'jenny@gmail.com',
  //    age: 20
  //  },
  //  {
  //    avatarUrl: 'https://via.placeholder.com/150',
  //    name:'Johnny Test',
  //    email:'johnny.Test@sisterslab.com',
  //    age: 102
  //  },
  //  {
  //    avatarUrl: 'https://via.placeholder.com/150',
  //    name:'Peter Pan',
  //    email:'peter.pan@neverland.com',
  //    age: 100
  //  },
  //];
  const [ results , setResults] = useState([])
  useEffect(() =>{
    fetch("https://randomuser.me/api/?results=5")
      .then(response => response.json())
      .then(data => setResults(data.results))
  },[]);

  return(
    <div>
      {results.map((result,index)=>{
        return(

          <ContactCard//reading using arrays
          avatarUrl = {result.picture.large                             }
          name      = {result.name.first + ' '+ result.name.last        }
          email     = {result.email                                     }
          age       = {result.dob.age                                   }
        />
        );
      })}
    
  
    </div>
  );
}

export default App;
