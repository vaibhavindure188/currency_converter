
import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'

  function useCurrencyInfo(currency) {
  const[data, setData] = useState({});

  console.log(currency);
  //   try {
  //     const re = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
  //     const dt = await re.json();
          // return dt;
  // }
  //   catch{
  //     console.error(error);
  //   }
   useEffect(()=>{
    
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((res) => res.json())
    .then((res) =>  {setData(res[currency])} )
    .catch((error) =>console.log('error is ', error))

    // or you can use axios also 
    // axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    // .then((res) => res.data)
    // .then((res) =>  {setData(res[currency])} )
    // .catch((error) =>console.log('error is ', error))
  },[currency]);

  console.log(data);
  return data;
}

export default useCurrencyInfo
