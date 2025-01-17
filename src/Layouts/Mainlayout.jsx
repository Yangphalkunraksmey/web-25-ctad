import { Outlet } from "react-router";
import CardRightSide from "../componemts/CardRightSide";
import AppNavbar from "../componemts/Appnavbar";
import Footer from "../componemts/Footer"

export default function Mainlayout(){
    return(
       <>
        <AppNavbar/>
         <div className="grid grid-cols-12">
            <div className="col-span-8">
                <Outlet/>
            </div>
            <div className="col-span-4">
                <CardRightSide/>
            </div>
         </div>
         <Footer />
       </>

    )
}