import React, {use, useState} from "react";
import axios from 'axios';
import './App.css';

function App(){
  const [dog, setDog] = useState(null);
  const fetchDog = async () => {
    try{
      const response = await axios.get("http://localhost:5000/dog");
      setDog(response.data.image);
    }catch (error){
      console.log("Error fetching dog: ", error);
      alert("Failed to fetch dog image");
    }
  };
  return(
    <div>
      <h1>Random Dog</h1>
      <button onClick={fetchDog}>Get Dog</button>
      <div>
        {dog && <img src={dog} alt="dog" width="300" />}
      </div>
    </div>
  )
}

export default App;




