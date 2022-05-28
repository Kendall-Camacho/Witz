import React from "react";


const Button = ({ children, classCSS }) => {
  return (
    <>
      <button
        className={((classCSS === 'Register') ? 'loginRegisterButton' : "loginButton").trimEnd()}
      >
        {children}
      </button>
    </>
  )
}

export default Button;