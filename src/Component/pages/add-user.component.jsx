import '../..'
import { useState } from "react";
export default function Adduser(){
    const [firstName,setfirstName]= useState("");
    const [lastName,setlastName]= useState("");
    const [age,setage]= useState(0);
    const [email,setemail]= useState("");
    const [password,setpassword]= useState("");
    const [checkpassword,setcheckpassword]= useState("");



    let myfirstName=(e)=>{
        setfirstName(e.target.value)
       
    }
    let mylastName=(e)=>{
        setlastName(e.target.value)
        
    }
    let myage=(e)=>{
        setage(e.target.value)
    }
    let myemail=(e)=>{
        setemail(e.target.value)
      
    }
    let mypassword=(e)=>{
        setpassword(e.target.value)
       
    }
    let mycheckpassword=(e)=>{
        setcheckpassword(e.target.value)
       
    }
    let checkPass=()=>{
    
        if (password == checkpassword){
            alert("corect");
        }
        else{
            alert("wrong")
        }
    }
    let printform=(e)=>{
        e.preventDefault();
        checkPass();
        
        
        document.getElementById("myrow").innerHTML+=`<tr><td>${firstName}</td>
        <td>${lastName}</td>
        <td>${age}</td>
        <td>${email}</td>
        <td>${password}</td>
    </tr>`
    }


    return(
    <div>
        <form>
         
            <input type="text" placeholder="first name" onChange={myfirstName} /><br/>
    
            <input type="text" placeholder="last name" onChange={mylastName} /><br/>
          
            <input type="text"  placeholder="age" onChange={myage} /><br/>
      
            <input type="text" placeholder="email" onChange={myemail} /><br/>

            <input type="text" placeholder="password" onChange={mypassword} /><br/>

            <input type="text" placeholder="mycheckpassword" onChange={mycheckpassword} /><br/>

            <button onClick={printform}>ClickToSend</button>
        </form>    
        <table>
                <thead>
                    <th>first name:</th>
                    <th>last name:</th>
                    <th>age:</th>
                    <th>email:</th>
                    <th>password:</th>
                </thead>
                <tbody id="myrow">
                    
                    </tbody>      
        </table>
 
    </div>
    )
    }