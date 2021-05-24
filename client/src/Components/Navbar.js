import React, {useContext} from 'react';
import{Link, useHistory} from 'react-router-dom'
import { UserContext } from '../App';

const Navbar=()=>{
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  const renderList = () =>{
    if(!state){
      return [ 
        <>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          {/* <li><Link to="/logout">Logout</Link></li> */}
         
        </>
      ]
    }
    else {
      return [
        <>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/createpost">CreatePost</Link></li>
        <li><Link to="/subpost">My Follwing Posts</Link></li>
        <button onClick={()=>{
                        localStorage.clear()
                        dispatch({type:"CLEAR"})
                        history.push("/login")
                    }} className="btn waves-effect waves-light #e57373 blue lighten-2" type="submit" name="action">LogOut
                    </button>
           
        </>
      ]
    }
  }
    return(
        <nav>
    <div className="nav-wrapper">
      <Link to={state?"/":"/login"} className="brand-logo left b">Social Network</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
          {renderList()}
        
      </ul>
    </div>
  </nav>
    )
}

export default Navbar;