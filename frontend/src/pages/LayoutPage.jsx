import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";

import {OutLet} from "react-router";

export default function LayoutPage() {
  return (
    <div>
        <NavigationBar/>
        <OutLet/>
        <Footer/> 
    </div>
  )
}
