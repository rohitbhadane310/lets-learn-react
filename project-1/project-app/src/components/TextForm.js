
import React from 'react';
import { useState } from 'react';

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("upperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upperCase!" , "success");
    }

    const handleLoClick = () => {
        console.log("lowerCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowerCase!" , "success");
    }

    const handleClearClick = () => {
        console.log("clear the text" + text);
        let newText = "";
        setText(newText);
        props.showAlert("cleared the text!" , "success");
    }

    const handleReverseClick = () => {
        console.log("reverse the text" + text);
        let newText = () =>{
            let arr = text.split("");
            let output = [];
            for(let i = arr.length-1; i >= 0; i--)
            {
                output.push(arr[i]);
            }
            return output.join("");
        };
        setText(newText);
        props.showAlert("Converted to reverse form!" , "success");
    }

    const handleCapitalizeClick = () => {
        console.log("capitalizeClick" + text);
        let newText = () =>{
            let finalStrArr = []
            let strArr = text.split(" ")
            strArr.forEach(element =>{
                finalStrArr.push(element.charAt(0).toUpperCase()+ element.slice(1));
            });
            let finalStr = finalStrArr.join(" ")
            return finalStr;
        }
        setText(newText);
        props.showAlert("Converted to captilize of each word!" , "success");
    }


    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color: props.mode ==='dark' ? 'white' : 'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"><h2>Enter the text</h2></label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark' ? 'gray' : 'white' , color: props.mode ==='dark' ? 'white' : 'black' }} id="myBox" rows="8" ></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCapitalizeClick}>Captialize each word</button>
                <button className="btn btn-primary mx-2" onClick={handleReverseClick}>reverse words</button>
            </div>
            <div className="container my-4" style={{color: props.mode ==='dark' ? 'white' : 'black'}}>
                <h2>your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters </p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text: "Enter something in the above textBox"}</p>
            </div>
        </>
    )
}




// let newText = () =>{
//         let newString = "";
//        for(let i = text.length-1; i>=0; i--){
//            newString += text[i];
//        }
//        return newString;
//     };
//     setText(newText);

// let strArr = text.split("");
//         let arr = [];
//         for(let i = strArr.length-1; i>=0; i--)
//         {
//             arr.push(arr[i]);
//         }
//         let newText = arr.join("");
//         setText(newText);