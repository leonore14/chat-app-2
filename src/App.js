import React from 'react';
import Contact from './components/Contact';
import './App.css';


function App() {
  return (
    <>
    <div className="App">
       < Contact 
        name="Ian Ryan" 
        avatar="https://randomuser.me/api/portraits/men/83.jpg"
        online
       />
       < Contact 
        name="Marjorie Little" 
        avatar="https://randomuser.me/api/portraits/women/50.jpg"
        
       />
       < Contact 
        name="Cathy Lucas" 
        avatar="https://randomuser.me/api/portraits/women/8.jpg"
        online
       />
    </div>
    </>
  );
}

export default App;


