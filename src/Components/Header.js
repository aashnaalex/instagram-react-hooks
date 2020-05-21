import React from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineSend} from 'react-icons/ai';
import {AiOutlineCompass} from 'react-icons/ai';
import {AiOutlineHeart} from 'react-icons/ai';
import image from '../image.jpg';



function Header() {
    return (
        <div style = {{height: "50px", border: "1px dotted black", fontFamily: "Comic Sans MS", display : "flex"}}>
            <h1 style = {{margin: "0px 15px", flex: "10"}}>Instagram</h1>
                <AiOutlineHome style = {{float: "right", height: "20px", width: "20px", margin : "10px", cursor: "pointer"}}></AiOutlineHome>
                <AiOutlineSend style = {{float: "right", height: "20px", width: "20px", margin : "10px", cursor: "pointer"}}></AiOutlineSend>
                <AiOutlineCompass style = {{float: "right", height: "20px", width: "20px", margin : "10px", cursor: "pointer"}}></AiOutlineCompass>
                <AiOutlineHeart style = {{float: "right", height: "20px", width: "20px", margin : "10px", cursor: "pointer"}}></AiOutlineHeart>
                <div style = {{borderRadius: "50%"}}>
                    <img src = {image} style = {{width: "20px", height: "20px", borderRadius: "50%", margin: "10px", float:"right"}}></img>
                </div>
        </div>
    )
}

export default Header;