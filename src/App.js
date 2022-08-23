import './App.css';
import Counter from './Component/pages/counter.component';
import User from './Component/pages/User.component';
import Course from './Component/pages/Course.component';
import UsersTable from './Component/pages/Users-Table/Users-Table';
import Reducer from './Component/pages/Reducer/Reducer';


function App() {

  // function Toggle(n){ ///////////////12
  //   if(){
  //     <About/>
  //   }
  //   else{
  //     <Course/>
  //   }
  // }

  return (
    <div className="App">
      {/* <Reducer/> */}
      {/* <Counter num={54}/> */}
      {/* <User/> */}
      <UsersTable/>
      {/* <Course/>  */}
      {/* <About/> */}

    </div>
  );
}

export default App;


