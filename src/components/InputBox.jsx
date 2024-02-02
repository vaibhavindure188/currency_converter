import React from 'react'

function InputBox({ 
  className = "",
  amountDisabled = false,
  currencyDisabled = false,
  label, ammount, onAmmountChange, onCurrencyChange,
  currencyOptions = [], 
  selectedCurrency = 'usd',
     })
{
  return (
    <div className={`${className} bg-white p-3 rounded-lg text-sm flex `}>
    
      <div className='w-1/2'>
        <label htmlFor='currency' className='text-green/40 mb-2 inline-block ' style={{color:'green', fontSize:"18px"}}>{label}</label>
        <input id='currency' type='number' 
            placeholder='Enter ammount' 
            className='outline-none w-full bg-transparent py-1.5 '
            disabled={amountDisabled} 
            onChange={(e)=> {onAmmountChange && onAmmountChange(Number(e.target.value))}}
            value={ammount}
            autoFocus
            style={{color:"blue", fontSize:'20px'}}
         ></input>

         <select 
           value={selectedCurrency}
           onChange={(e) =>{onCurrencyChange && onCurrencyChange(e.target.value)}}
           className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none float-start ms-52 ml-20'
           disabled={currencyDisabled}
           style={{color:"red" , fontSize:'20px', marginLeft:'50px'}}
          >
            {
                currencyOptions.map((currency) =>(
                    <option key={currency} value={currency} style={{color:"black" , fontSize:'20px'}}>{currency}</option>
                ))
            }
          </select>
      </div>

      <div className='flex flex-wrap justify-end w-1/2 text-right'>
        <p className='text-black/40 mb-3 w-full float-start mt-20 mr-20 bg-grey'>(currency type)</p>
      </div>
    </div>
  )
}

export default InputBox
