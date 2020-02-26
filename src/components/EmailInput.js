import React, { useState } from "react"

export default props => {
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")

  return (
    <>
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
    </>
  )
}
