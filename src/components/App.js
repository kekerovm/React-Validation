import React, { useState } from "react"
import validator from "validator"

export default props => {
  const [fname, setFname] = useState("")
  const [fnameError, setFnameError] = useState("")
  const [lname, setLname] = useState("")
  const [lnameError, setLnameError] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    let valid = true

    if (fname === "") {
      valid = false
      setFnameError("Cannot be blank")
    } else {
      setFnameError("")
    }

    if (lname === "") {
      valid = false
      setLnameError("Cannot be blank")
    } else {
      setLnameError("")
    }

    if (!validator.isEmail(email)) {
      valid = false
      setEmailError("Invalid email")
    } else {
      setEmailError("")
    }

    if (valid) {
      alert("It's valid!")
    } else {
      alert("ERROR! Please Review Your Entry")
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className={fnameError ? "error" : ""} htmlFor="fname">
          First Name {fnameError && fnameError}
        </label>
        <input
          type="text"
          id="fname"
          placeholder="John"
          className={fnameError ? "error" : ""}
          value={fname}
          onChange={e => setFname(e.target.value)}
        />
        <br />
        <label className={lnameError ? "error" : ""} htmlFor="lname">
          Last Name {lnameError && lnameError}
        </label>
        <input
          className={lnameError ? "error" : ""}
          type="text"
          id="lname"
          placeholder="Smith"
          value={lname}
          onChange={e => setLname(e.target.value)}
        />
        <br />
        <label className={emailError ? "error" : ""} htmlFor="email">
          Email {emailError && emailError}
        </label>
        <input
          className={emailError ? "error" : ""}
          type="email"
          id="email"
          placeholder="john@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
