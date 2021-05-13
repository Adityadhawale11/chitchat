import React,{useContext} from'react'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../App'

const Navbar=()=>{
  const{state,dispatch}=useContext(UserContext)
  const history =useHistory()
  const renderList=()=>{
    if(state){
        return[
          
          <li><Link to="/profile">Profile</Link></li>,
          <li><Link to="/create">Create Post</Link></li>,
          <li><Link to="/myfollowingpost">My following posts</Link></li>,
          <li>
            <a className=" btn-small white-text red darken-2" onClick={()=>{
                localStorage.clear()
                dispatch({type:"CLEAR"})
                history.push('/signin')
              }}><i class="material-icons left ">logout</i>logout</a>
            
          </li>
        ]
    }
    else{
        return[
          <li><Link to="/signin">Signin</Link></li>,
        <li><Link to="/signup">Signup</Link></li>
        ]
    }
  }
    return(
      
        <nav>
    <div className="nav-wrapper white">
      <Link to={state?"/":"/signin"} className="brand-logo left">Chit-chat</Link>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger right"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
       {renderList()}
      </ul>
      
    </div>
    <ul class="sidenav " id="mobile-demo">
  {renderList()}
  
 </ul>

  </nav>

 
    )
    
}
export default Navbar