import React from 'react'

export default function SignInForm() {
  return (
    <form> 
        <h3>Sign In</h3>
        <fieldset>
            <label for="email">Email: </label>
            <input type="text"  name ="email" id="email" />
            <label for="password">Password:</label>
            <input type="password"  name ="password" id="password" />
            <input type="submit" name="submit" id="submit"/>
        </fieldset>
    </form>
  )
}
