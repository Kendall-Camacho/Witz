import React from "react";


/* Takes in two parameters, children and classCSS. */
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