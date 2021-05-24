import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import M from 'materialize-css'

export const CreatePost = () => { 
      const [title, settitle] = useState("")
      const [body, setbody] = useState("")
      const [image, setimage] = useState("")
      const [url, seturl] = useState("")
      const history = useHistory();
      useEffect(() => {
        if(url)
        {
          fetch("/createpost",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify(
                {
                   title,
                   body,
                   pic:url
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
                    M.toast({
                        html:"Created Post Successfully", 
                        classes:"#6a1b9a purple darken-3"
                    })
                    history.push("/")
                }
            }).catch(err=>{
                console.log(err);
            })
        }
      }, [url])
      const postDetails = () =>{
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

        fetch("/createpost",{
          method:"post",
          headers:{
              "Content-Type":"application/json",
              "Authorization":"Bearer "+localStorage.getItem("jwt")
          },
          body:JSON.stringify(
              {
                 title,
                 body,
                 pic:url
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
                  M.toast({
                      html:"Created Post Successfully", 
                      classes:"#6a1b9a purple darken-3"
                  })
                  history.push("/")
              }
          }).catch(err=>{
              console.log(err);
          })
  }
    return (
        <div className="card input-filed" style={{margin:"10px auto", maxWidth:"500px",padding:"20px",textAlign:"center"}}>
            <input type="text" placeholder="Title" value={title} onChange={(e)=>{
                settitle(e.target.value)
            }}/>
            <input type="text" placeholder="Description" value={body} onChange={(e)=>{
                setbody(e.target.value)
            }} />
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
        postDetails()
      }}
      className="btn waves-effect waves-light #e57373 red lighten-2">Upload Post</button>
      
        </div>
    )
}
