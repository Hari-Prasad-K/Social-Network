import React, { useContext, useEffect,useState } from 'react'
import { UserContext } from '../../App'

export const Profile = () => { 
    const {state,dispatch} = useContext(UserContext)
    const [pics, setpics] = useState([])
    useEffect(()=>{
            fetch("/mypost",{
                headers:{
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                }
            }).then(res=>res.json()).then(res=>{
                setpics(res.mypost)
            })
    },[])
    return (
        <div style={{maxWidth:"550px", margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"18px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"160px",height:"160px", borderRadius:"80px"}} src={state?state.pic:"loading"} alt="Profie"/>
                </div>
                <div>
                    <h5>{state?state.name:"loading"}</h5>
                <div style={{
                    display:"flex",
                    justifyContent:"space-around",
                    width:"108%"
                }}>
                    <h6>{pics.length} Posts</h6>
                    <h6>{state?state.followers:"0"} Followers</h6>
                    <h6>{state?state.following:"0"} Following</h6>
                </div>
                </div>
            </div>
        <div className="gallery">
                    {pics.map(item=>{
                        return (<img key={item._id} className="item" src={item.photo} alt="nothing"/>)
                    })
                    }        
        </div>
        </div>
    )
}
