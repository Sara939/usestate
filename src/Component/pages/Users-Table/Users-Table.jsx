import "./Users-Table.css";
import { useState } from "react";


function UsersTable() {
  const [newArray, setNewArray] = useState([]);
  let ArrayOfObjects = [
    { fname: "sara", lname: "likaount", age: 30, email: "fsfd@", password: "jfj" },
    { fname: "sa", lname: "lik", age: 3, email: "fsfd@", password: "jf1212" },
    { fname: "ra", lname: "aount", age: 0, email: "@", password: "jfj" }
  ];

  const getObjects = () => {

    setNewArray(ArrayOfObjects);
  }

  return (
    <div className="users-table">
      <h1>Users-Table</h1>
      <button onClick={getObjects}>add list of objects</button>

      {newArray.map((obj) => (
        <table>
          {/* <thead><th>First Name</th><th>Last Name</th><th>Age</th><th>E-mail</th><th>Password</th></thead> */}
          <tbody>
            <tr>
            <td><input value={obj.fname}/></td><td><input value={obj.lname}/></td><td><input value={obj.age}/></td><td><input value={obj.email}/></td><td><input value={obj.password}/></td>
            </tr>
          </tbody>
        </table>
      ))}

    </div>
  );
};


export default UsersTable;
