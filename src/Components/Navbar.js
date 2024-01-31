import { NavLink, Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import '../Styles/Navbar.css'
import bg from '../Assets/bg1.mp4'
import bgv from '../Assets/bgv2.mp4'
import {BarLoader} from 'react-spinners'
import { ToastContainer } from "react-toastify"

function Navbar(){

    const [loading, setLoading]=useState(false);

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setLoading(true);
    //     },1000)
    // },[loading])

    return (
        <>
      <ToastContainer theme="dark"/>
        {!loading?
            <>
                    <div className="navbar-spinner">
                        <BarLoader color="#fff" loading={!loading} size={20} />
                    </div>
                    <video className="bg-video" autoPlay='true' loop muted preload='auto' onCanPlayThrough={()=>{setLoading(!loading)}}>
                        <source src={bgv}/>
                    </video>
            </>
           : <>
            <header>
                <NavLink activeClassName="active" className="header-link" to="/portfolio/">Home</NavLink>
                <NavLink activeClassName="active" className="header-link" to="/portfolio/education">Education</NavLink>
                {/* <NavLink activeClassName="active" className="header-link" to="/portfolio/work-experience">Work Experience</NavLink> */}
                <NavLink activeClassName="active" className="header-link" to="/portfolio/projects">Projects</NavLink>
                <NavLink activeClassName="active" className="header-link" to="/portfolio/certifications">Certifications</NavLink>
                <NavLink activeClassName="active" className="header-link" to="/portfolio/skills">Skills</NavLink>
                <NavLink activeClassName="active" className="header-link" to="/portfolio/contacts">Contacts</NavLink>
            </header>
            <video className="bg-video" autoPlay='true' loop muted preload='auto'>
                        <source src={bgv}/>
            </video>
            <Outlet/>
            </>
        }
        </>
    )
}

export {Navbar}