import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom'
import {Home} from './Components/Screens/Home'
import {Profile} from './Components/Screens/Profile'
import { Login } from './Components/Screens/Login';
import { SignUp } from './Components/Screens/SignUp';
import { CreatePost } from './Components/Screens/CreatePost';
import { createContext, useContext, useEffect, useReducer } from 'react';
import {initialState,reducer} from './reducers/userReducer'
import { UserProfile } from './Components/Screens/UserProfile';
import {SubscribedUserPost} from './Components/Screens/SubscribedUserPost'

export const UserContext = createContext()
const Routing = () => {
  const history = useHistory()
  const {state,dispatch}=useContext(UserContext)
  useEffect(()=>{
      const user = JSON.parse(localStorage.getItem("user"))
      if(user){
        dispatch({type:"USER", payload:user})
        // history.push("/")
      }
      else {
        history.push("/login")
      }
  },[])
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/signup" component={SignUp}></Route>
      <Route exact path="/profile" component={Profile}></Route>
      <Route path="/createpost" component={CreatePost}></Route>
      <Route path="/subpost" component={SubscribedUserPost}></Route>
      <Route path="/profile/:userid" component={UserProfile}></Route>
    </Switch>
  )
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <Navbar/>
      <Routing />
    </BrowserRouter>
    </UserContext.Provider>
      
  );
}

export default App;
