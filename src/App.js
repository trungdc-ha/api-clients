import './App.css';
import {StudentCreate} from "./components/StudentCreate";
import {NavLink, Route, Routes} from "react-router-dom";
import {StudentList} from "./components/StudentList";
import {StudentUpdate} from "./components/StudentUpdate";
import {ToastContainer} from "react-toastify";

function App() {
  return (
      <>
        <NavLink to='/'>List</NavLink>
        <NavLink to='/create' className='ms-3'>Create</NavLink>

        <Routes>
          <Route path='/' element={<StudentList/>}/>
          <Route path='/create' element={<StudentCreate/>}/>
          <Route path='/update/:id' element={<StudentUpdate/>}/>
        </Routes>

        <ToastContainer />
      </>
  );
}

export default App;
