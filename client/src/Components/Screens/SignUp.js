import React,{useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'

export const SignUp = () => {
        const history = useHistory()
        const [name, setname] = useState("")
        const [password, setpassword] = useState("")
        const [email, setemail] = useState("")
        const [url, seturl] = useState("")
        const [image, setimage] = useState("")

        useEffect(() => {
            if(url)
                uploadFields()
        }, [url])
        
        const uploadFields = ()=>{
            if(! /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
            {
                M.toast({
                    html:"Invalid Email Id",
                    classes:"#e53935 red darken-3"
                })
                return 
            }
            fetch("/signup",{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(
                    {
                        name:name,
                        email:email,
                        password:password,
                        pic:url
                    }
                )
            }).then(res=>
                res.json()).then(data=>{
                    if(data.error){
                      M.toast({
                          html:data.error,
                          classes:"#e53935 red darken-3"
                      })
                    }
                    else{
                        M.toast({
                            html:data.message, 
                            classes:"#6a1b9a purple darken-3"
                        })
                        history.push("/login")
                    }
                }).catch(err=>{
                    console.log(err);
                })
        }
        
        const PostData = () => {
            if(image){
                uploadPic()
            }
            else{
                uploadFields()
            }
        }

        const uploadPic = () =>{
            const data = new FormData()
            data.append("file",image)
            data.append("upload_preset","socialnetwork")
            data.append("cloud_name","dxopkgosy")
            fetch("https://api.cloudinary.com/v1_1/dxopkgosy/image/upload",{
            method:"post",
            body:data
            }).then((res)=>res.json()).then(data=>{
            seturl(data.url);
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
                        placeholder="name"
                        value={name}
                        onChange={(e)=>{
                            setname(e.target.value)
                        }} />
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
                    <div className="file-field input-field">
                     <div className="btn waves-effect waves-light #e57373 red lighten-2">
                        <span>Upload Image</span>
                        <input type="file" onChange={(e)=>{
                            setimage(e.target.files[0])
                            // console.log(e.target.files[0])
                        }}/>
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text"/>
                    </div>
                    </div>
                    <button onClick={()=>{
                        PostData()
                    }}
                    className="btn waves-effect waves-light #e57373 red lighten-2" type="submit" name="action">SignUp
    <i className="material-icons right">send</i>
                    </button>
                    <h6><Link to ="/login">Already Have an Account?</Link></h6>
                </div>
            </div>
        </div>
    )
}
