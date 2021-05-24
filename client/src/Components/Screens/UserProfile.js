import React, { useContext, useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../App'


export const UserProfile = () => {  
    const {state,dispatch} = useContext(UserContext)
    const [prof, setprof] = useState(" ")
    const [profile, setprofile] = useState("")
    const [useremail, setuseremail] = useState("")
    const [username, setusername] = useState("")
    const [posts, setposts] = useState([])
    const {userid} = useParams()
    const [showFollow, setshowFollow] = useState(state?!state.following.includes(userid):true)
    const [userPic, setuserPic] = useState("")
    console.log(userid);
    useEffect(()=>{
            fetch(`/user/${userid}`,{
                headers:{
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                }
            }).then(res=>res.json())
            .then(result=>{
                setusername(result.user.name)
                setuseremail(result.user.email)
                setprofile(result.posts.length)
                setposts(result.posts)
                setuserPic(result.user.pic)
                setprof(result)
            })
    },[])

    const followUser = () =>{
        fetch("/follow",{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                followId:userid
            })
        }).then(res=>res.json())
        .then(data=>{
            dispatch({
                type:"UPDATE",
                payload:{following:data.following,followers:data.followers}
            })
            localStorage.setItem("user",JSON.stringify(data))
            setprof((prevState)=>{
                return {
                    user:{
                    ...prevState.user,
                    followers:[
                        ...prevState.user.followers,
                        data._id]   
                    }
            }
        })
        setshowFollow(false)
        })
    } 
    const unfollowUser = () =>{
        fetch("/unfollow",{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                followId:userid
            })
        }).then(res=>res.json())
        .then(data=>{
            dispatch({
                type:"UPDATE",
                payload:{following:data.following,followers:data.followers}
            })
            localStorage.setItem("user",JSON.stringify(data))
            setprof((prevState)=>{ 
               const newFollower = prevState.user.followers.filter(item=>item!==data._id)
                return {
                    user:{
                        ...prevState,
                        users:{
                            ...prevState.user,
                            followers:newFollower
                        },
                        
                    }
                }
            })
            setshowFollow(true)
            window.location.reload()
    })

    } 
    return ( 
        <>
            {
                posts? (
                    <div style={{maxWidth:"550px", margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"18px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"160px",height:"160px", borderRadius:"80px"}} src={ userPic} alt="Profie"/>
                </div>
                <div>
                    <h5>
                        {username}
                    </h5>
                    <h5>
                        {useremail}
                    </h5>
                <div style={{
                    display:"flex",
                    justifyContent:"space-around",
                    width:"108%"
                }}>
                    <h6>{profile} Posts</h6>
                    <h6>{prof.user===undefined ? "loading..." : prof.user.followers===undefined?"loading":prof.user.followers.length} Followers</h6>
                    <h6>{prof.user===undefined ? "loading..." : prof.user.following===undefined?"loading":prof.user.following.length} Following</h6>
                     
                </div>
                { showFollow? (
                    <button onClick={()=>{
                        followUser()
                    }} className="btn waves-effect waves-light #e57373 blue lighten-2" type="submit" name="action">Follow
                    </button>
                )
                    :( <button onClick={()=>{
                        unfollowUser()
                    }} className="btn waves-effect waves-light #e57373 red lighten-2" type="submit" name="action">UnFollow
                    </button>
                    )}
                </div>
            </div>
        <div className="gallery">
                    {posts.map(item=>{
                        return (<img key={item._id} className="item" src={item.photo} alt="nothing"/>)
                    })
                    }        
        </div>
        </div>
                ): "Loading .."
            }
        </>
        
    )
}
