import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Country from './components/country/Country';

function App() {
  const [countries,setCountries] = useState([]);
  const [cart,setCart]= useState([]);
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  },[])

  const handleAddCountry = (country) => {
    // console.log(country);
    const newCart = [...cart , country]
    setCart(newCart);
  };
  return (
    <div className="App">
      <h1>Country Loaded : {countries.length} </h1>
      <Cart cart= {cart}></Cart>
        <ul>
            {
              countries.map(country =><Country country= {country} key={country.alpha3Code} handleAddCountry = {handleAddCountry}></Country> )
            }
       </ul>
    </div>
  );
}

export default App;
