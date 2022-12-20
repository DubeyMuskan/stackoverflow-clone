import React from 'react'
import { useEffect,useState } from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assests/Banner.png'
import menu from '../../assests/menu.png'
import search from '../../assests/searchengin.svg'
import favicon from '../../assests/favicon.png'
import Avatar from '../Avatar/Avatar'
import Button from '../Button/Button'
import { currentUser } from '../../actions/currentUser'
import './Navbar.css'
import decode from 'jwt-decode'

export default function Navbar() {
    var user=useSelector((state)=> (state.currentUser));
    const [windowSize, setWindowSize] = useState(getWindowSize());
  
    var dispatch=useDispatch();
    const navigate=useNavigate();
    
    console.log("Inner",windowSize)

    function getWindowSize() {
      const {innerWidth, innerHeight} = window;
      return {innerWidth, innerHeight};
    }
    useEffect(() => {
      function handleWindowResize() {
        setWindowSize(getWindowSize());
      }
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);
    useEffect(() => {
      if(user!==null){
      var gettoken=user.token;
      if(gettoken){
        const decodeToken=decode(gettoken)
        if(decodeToken*1000 < new Date().getTime())
          handleLogOut();
      }
    }
      dispatch(currentUser(JSON.parse(localStorage.getItem('Profile'))));
      console.log(user);
    }, [dispatch])
    

    const handleLogOut=()=>{
      dispatch({type: 'LOGOUT'})
      dispatch(currentUser(null));
      navigate('/');
    }
    const addClassSideNav=()=>{
      console.log("hello")

      const element=document.getElementById("sidecontainer")
      if(element.classList.contains('hide-side'))
      {
        element.classList.remove('hide-side');
        return
      }
      
      if (element.classList.contains('when-open') ) {
        element.classList.remove('when-open');
        element.classList.remove('hide-side');
    }else
    {
    
     element.classList.add("when-open")
    }
      
    }

  return (
    <nav className='main-nav'>
      <div className='navbar'>
      {/* <div  >
      
      </div> */}
        <Link to="/Home" className='nav-item nav-logo logo-container'>
        <img height={20} onClick={addClassSideNav} src={menu} alt="menu" className='menu-bar' style={{marginRight:"20px"}}/>
            <img height={40} src={logo} alt="logo" className='big-logo'/> 
            <img height={40} src={favicon} alt="logo" className='small-logo'/>      
        </Link>
        <Link to="/" className='nav-item nav-btn'>About</Link>
        <Link to="/" className='nav-item nav-btn'>Products</Link>
        <Link to="/" className='nav-item nav-btn'>For Teams</Link>
        
        <form>
           {!(windowSize.innerWidth< 600 )?<input type="text" placeholder='Search...' />:null}
           <img src={search} height='20' className='search-icon' alt="search" />
   
        </form>
        
        {user===null ?
        <Link to="/Auth" className='nav-item nav-links'>Log in</Link> :
        <>
           <Link to={`Users/${user.result._id}`} style={{color: 'white' , textDecoration: 'none'}}><Avatar backgroundColor='#009dff' px="8px" py="15px" borderRadius='50%' color='white'>{user.result.name.charAt(0).toUpperCase()}</Avatar></Link>
           <button className='nav-item nav-links' onClick={handleLogOut}>Log out</button>
        </>
    }
       
      </div>
    </nav>
  )
}
