import React from 'react'


function Div({ fontSize, children }) {

    console.log(children);


    return (
        <div style={{ fontSize: fontSize }}>
            {children}
        </div>
    )


}



function Button({ children }) {

    console.log(children);


    function alertButton() {
        alert("hollow button");
        console.log("aklakkaakkaak");
    }


    return (
        <button onClick={alertButton}>
            {children}
        </button>
    )


}


function Input({ children }) {

    console.log(children);


    function alertButton() {
        alert("hollow button");
        console.log("aklakkaakkaak");
    }


    return (
        <input type="text" />
    )


}


const Controller = ({ children }) => {
    console.log(children);

    return (
        <div className='controller'> {children}</div>
    )
}







Controller.Div = Div
Controller.Button = Button
Controller.Input = Input


export default Controller
