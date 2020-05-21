import React, {useState} from 'react';
import {AiOutlineSend} from 'react-icons/ai';
import {AiOutlineHeart} from 'react-icons/ai';


function Feed ({ id, post}) {

    return (
        
        <div className = "container" style = {{border: "1px dotted grey", fontFamily: "Comic Sans MS", width: "500px", margin: "20px auto 50px auto"}}>
            <div style = {{display: "flex"}}>
                <img src = {post.post} style = {{borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    margin: "15px"}}></img>
                <p style= {{flex: "10"}}>{id}</p>
                <button style = {{fontSize: "xx-large", float: "right", flex: "1", margin: "1px", border: "none", backgroundColor:"white", cursor: "pointer"}}>...</button>

            </div>
            <img src = {post.post} style = {{width: "500px"}}></img>
            <div>
                <AiOutlineHeart style = {{width: "20px", height: "20px", margin: "10px", cursor: "pointer"}}></AiOutlineHeart>
                <AiOutlineSend style = {{width: "20px", height: "20px", margin: "10px", cursor: "pointer"}}></AiOutlineSend>
                <p style = {{margin: "5px"}}>{id}{' : '} {post.title}</p>
                <input type = "text" placeholder= "Type your comment" style = {{fontFamily: "Comic Sans MS",width: "500px",height: "50px", border: "none", borderTop: "1px dotted grey"}}></input>
                
            </div>



        </div>

    )
}

export default Feed;