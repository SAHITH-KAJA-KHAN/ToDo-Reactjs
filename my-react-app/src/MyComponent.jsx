import React,{useState} from 'react';
function MyComponent(){
//const[Array Destructing]
  const [name , setName]= useState("your name is");
  const [payment, setPayment]= useState("");

  function handlePaymentChange(event){
   setPayment(event.target.value);
  }

  const updateName = () =>{
  setName("Sahit");
  }
  return(
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button><br /><br />

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select Payment Method</option>
        <option value="Paypal">Paypal</option>
        <option value="Credit Card">Credit Card</option>  
      </select>
      <p>Payment : {payment}</p>
    </div>
  );

}
export default MyComponent