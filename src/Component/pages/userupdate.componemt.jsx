
import { useState } from "react";

export default function Userupdate({fnameof,lnameof,ageof,emailof}){
    const [firstName,setfirstName]= useState(fnameof);
    const [lastName,setlastName]= useState(lnameof);
    const [age,setage]= useState(ageof);
    const [email,setemail]= useState(emailof);


    let OnSubmit=(e)=>{
    e.preventDefault()
        if(firstName=="" && lastName=="" && age=="" && email==""){
            return alert("x");
        }
        else {
            alert("v");
        }
    }
    

    return(
        <div>
        <form>
         
         <input type="text" placeholder="first name"/><br/>
 
         <input type="text" placeholder="last name" /><br/>
       
         <input type="text"  placeholder="age"/><br/>
   
         <input type="text" placeholder="email"/><br/>

         <button onClick={OnSubmit}>ClickToSend</button>
        </form> 
            {/* {firstName}
            {lastName}
            {age}
            {email} */}

        </div>
    )
}