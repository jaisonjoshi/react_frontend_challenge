import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import CreateUser from "./pages/User/CreateUser";
import initialData from "./assets/data/userList";
import { useState } from "react";
import UpdateUser from "./pages/User/UpdateUser";



function App() {
  const [userData, setUserData] = useState(initialData)

  return (

    

    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home userData={userData} setUserData={setUserData}/>} />
          <Route path="/createuser" element={<CreateUser userData={userData} setUserData={setUserData} />} />
          <Route path="/updateuser/:id" element={<UpdateUser userData={userData} setUserData={setUserData}/>} />


        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
