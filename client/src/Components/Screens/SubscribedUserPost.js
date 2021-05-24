import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App'
import {Link} from 'react-router-dom'

export const SubscribedUserPost = () => {
    
    const [data, setdata] = useState([])
    const {state,dispatch} = useContext(UserContext)


    useEffect(() => {
            fetch("/getsubpost",{
                headers:{
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                }
            }).then(res=>
                 res.json()).then(res=>{
                    console.log(res);
                    setdata(res)
                })
    })

    const deletePost = (postId)=>{
        fetch(`/deletepost/${postId}`,{
            method:"delete",
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }

        }).then(res=>res.json()).then(result=>{
            console.log(result);
            const newData = data.filter(item=>{
                return item._id!==result.id
            })
            setdata(newData)
        })
    }

    const likePost =(id)=>{
        fetch("/like",{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId:id
            })
        }).then(res=>res.json()).then(res=>{
            const newData = data.map(item=>{
                if(item._id===res._id){
                    return res
                }
                else{
                    return item
                }
            })
            setdata(newData)
        }).catch(err=>{
            console.log(err);
        })
    }
    const unlikePost =(id)=>{
        fetch("/unlike",{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId:id
            })
        }).then(res=>res.json()).then(res=>{
            const newData = data.map(item=>{
                if(item._id===res._id){
                    return res
                }
                else{
                    return item
                }
            })
            setdata(newData)
        }).catch(err=>{
            console.log(err);
        })
    }

    const makeComment = (text,postId)=>{
        fetch("/comment",{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                text,
                name:localStorage.getItem("user").name,
                postId
            })
        }).then(res=>res.json()).then(res=>{
            console.log(res);
            const newData = data.map(item=>{
                if(item._id===res._id){
                    return res
                }
                else{
                    return item
                }
            })
            setdata(newData)
        }).catch(err=>{
            console.log(err);
        })
    }

    

    return (
        <div>
        {data.map(item=>{ 
            return (
                <div className="home">
                <div className="card home-card" key={item._id}>
                    <h5><Link to = {`/profile/${item.postedby._id}`} >{item.postedby.name}</Link>
                    <i className="material-icons" style={{float:"right",}} onClick={()=>{
                            deletePost(item._id)
                        }}>delete</i>
                        </h5>
                    <div className="card-image">
                        <img src={item.photo} alt="nothing"/>
                    </div>
                    <div className="card-content">
                        {item.likes.includes(state._id) ? (<i className="material-icons" onClick={()=>{
                            unlikePost(item._id)
                        }}>thumb_down</i>) : (<i className="material-icons" onClick={()=>{
                            likePost(item._id)
                        }}>thumb_up</i>
                        ) }
                        
                        <h6>{item.likes.length} Likes</h6>
                        <h6>{item.title}</h6>
                        <p>{item.body}</p>
                        {item.comments.map(record=>{
                            return(
                              <h6>
                                  <span style={{fontWeight:"600"}}>{record.postedby.name}</span>
                                    {record.text}
                              </h6>
                            );
                        })}
                        <form onSubmit={(e)=>{
                            e.preventDefault()
                            // console.log(e.target)
                            makeComment(e.target[0].value,item._id)
                        }}>
                            <input type="text" placeholder="Add a Comment"></input>
                        </form>
                        
                    </div>
                </div>
                
                </div>
            )
        })}
            
            </div>
    )
}
