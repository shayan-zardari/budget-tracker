
//import './App.css'
import {BrowserRouter, Routes, Route } from "react-router";
import { Fragment } from "react"
import SearchBar from "./components/SearchBar"
import SignUpForm from "./components/SignUpForm";
function App() {

  return (
    <BrowserRouter>
     <div>
      
      <Routes>
       
        <Route path="/search" element={<SearchBar />} />
        <Route path="/home" element={<SignUpForm />} />
      </Routes>
    </div>
    </BrowserRouter>

    
    
  )
}

export default App
