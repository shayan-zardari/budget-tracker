
//import './App.css'
import {BrowserRouter, Routes, Route } from "react-router";

import SignInPage from "./pages/SignInPage";

function App() {

  return (
    <BrowserRouter>
     <div>
      <Routes>
        <Route path="/sign-in" element={<SignInPage/>} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
