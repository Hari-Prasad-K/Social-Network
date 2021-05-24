import React,{useState,useContext} from 'react'
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'
import { UserContext } from '../../App'


export const Login = () => { 
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory();
    const [password, setpassword] = useState("")
        const [email, setemail] = useState("")
        const PostData = () => {
            if(! /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
            {
                M.toast({
                    html:"Invalid Email Id",
                    classes:"#e53935 red darken-3"
                })
                return 
            }
            fetch("/signin",{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(
                    {
                        email,
                        password
                    }
                )
            }).then(res=>
                res.json()).then(data=>{
                    if(data.error){
                        console.log(data.error);
                      M.toast({
                          html:data.error,
                          classes:"#e53935 red darken-3"
                      })
                    }
                    else{
                        localStorage.setItem("jwt",data.token)
                        localStorage.setItem("user",JSON.stringify(data.user))
                        dispatch({type:"USER",payload:data.user})
                        M.toast({
                            html:"Sigin Successfully", 
                            classes:"#6a1b9a purple darken-3"
                        })
                        history.push("/")
                    }
                }).catch(err=>{
                    console.log(err);
                })
        }
    return (
        <div className="mycard">
            <div className="card auth-card">
                <div className="card-content white-text">
                    <h3>The Social Network</h3>
                    <input type="text"
                        placeholder="email" 
                        value={email}
                        onChange={(e)=>{
                            setemail(e.target.value)
                        }} 
                        />
                    <input type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e)=>{
                            setpassword(e.target.value)
                        }}  
                        />
                    <button onClick={()=>{
                        PostData()
                    }} className="btn waves-effect waves-light #e57373 red lighten-2" type="submit" name="action">Login
    <i className="material-icons right">send</i>
                    </button>
                    <h6><Link to="/signup">Don't Have an Account ? SignUp</Link></h6>
                </div>
            </div>
        </div>
    )
}
