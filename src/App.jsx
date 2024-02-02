import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'
import { InputBox } from './components/index.js'

function App() {
  const [ammount, setAmmount] = useState()
  const[from,setFrom] = useState("usd")
  const[to, setTo] = useState("inr")
  const[convertedAmmount, setConvertedAmmount] = useState()
  const currencyInfo =  useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  console.log(options);

  // let var1 = 'vaibhav';
  // let var2 = 'ganesh';
  // let var3 = 'indure';
  // console.log('my name is : ', var1,var2,var3," ,, And welcome to the passion");

  useEffect(()=>{
     const convert = ()=>{
      setConvertedAmmount( (ammount * currencyInfo[to]).toFixed(2) );
    }
    convert();
  },[ammount,from])

  
  const swap = () =>{
    setTo(from);
    setFrom(to);
    
    setConvertedAmmount((ammount * currencyInfo[to]).toFixed(2));
    setAmmount(0);
  }

  useEffect(()=>{
    const swap = () =>{
      
      setConvertedAmmount(ammount * currencyInfo[to]);
    }
    swap();
  },[])
 

  
  return (
    <div className='w-full h-screen flex flex-wrap justify-center bg-cover items-center bg-no-repeat' style={{backgroundSize:'cover', backgroundRepeat:'no-repeat',backgroundPosition: 'center' , backgroundColor:'ThreeDHighlight',
    aspectRatio: '16/9'  }}>
    <h1 style={{fontSize:'30px', color:"purple"}}>Welcome to Currency Converter</h1>
     <div className='w-full'>
      <div className='w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
        <form 
          onSubmit = {(e)=>{ 
            e.preventDefault()
            convert()
          }}>
          <div className='w-full mb-1'>
            <InputBox 
            label="from"
             ammount={ammount}
              onAmmountChange={(amt) => setAmmount(amt)}
               onCurrencyChange={(currency) =>setFrom(currency)} 
               currencyOptions={options}
               selectedCurrency={from}
               
                />
          </div>
          <div className='relative w-full h-0.5'>
            <button onClick={swap} className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2
             border-white rounded-lg bg-blue-600 text-white px-2 py-0.5'>swap</button>
          </div>

          <div className='w-full mb-1'>
            <InputBox 
            label="to"
             ammount={convertedAmmount}
              onAmmountChange={(amt) => setConvertedAmmount(amt)}
               onCurrencyChange={(currency) =>setTo(currency)} 
               currencyOptions={options}
               selectedCurrency={to}
               amountDisabled={true}
                />
          </div>

        </form>
      </div>
     </div>
    </div>
  )
}

export default App
