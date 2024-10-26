import ReactDOM from "react-dom/client"
import "./style.css"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Body from "./component/Pages/Body"
import Header from "./component/Header/Header"
import Footer from "./component/Footer/Footer"
import ErrorPage1 from "./component/ErrorPage/ErrorPage"
import FreeToContact from "./component/FreeToContact/FreeToContact"
import NewsLetter from "./component/NewsLetter/NewsLetter"
import FreshBakes from "./component/FreshBakes/FreshBakes"
import Ratings from "./component/Ratings/Ratings"
import Features from "./component/Features/Features"
import Contact from "./component/Contact/Contact"
import OneGoal from "./component/OneGoal/OneGoal"


const paragraphElement = <p className="bg-red-800">Hello Bakery</p>

const Applayout = () => {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

const Router = createBrowserRouter([{
    path:"/",
    element:<Applayout/>,
    children:[
        {
            path:"/",
            element:<Body/>
        },
        {
            path:"/connect",
            element:<FreeToContact/>
        },
        {
            path:"/newsletter",
            element:<NewsLetter/>
        },
        {
            path:"/fresh",
            element:<FreshBakes/>
        },
        {
            path:"/rating",
            element:<Ratings/>
        },
        {
            path:"/features",
            element:<Features/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/goal",
            element:<OneGoal/>
        }
    ],
    errorElement: <ErrorPage1/>
}])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={Router}/>);