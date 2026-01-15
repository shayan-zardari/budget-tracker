import React from 'react'

export default function SignUpForm() {
  return (
    <form>
        <h3>Sign Up</h3>
        <fieldset>
            <label>First Name</label>
            <input type="text" name="first-name" id="first-name"/>
            <label>Last Name</label>
            <input type="text" name="last-name" id="last-name"/>
            <label>Email</label>
            <input type="email" name="email" id="email"/>
            <label>Password</label>
            <input type="password" name="password" id="password"/>
            <label>Confirm Password</label>
            <input type="password" name="confirm-password" id="confirm-password"/>
            <br/>
            <input type="submit" name="submit" id="submit-button"/>
        </fieldset>
    </form>
  )
}
