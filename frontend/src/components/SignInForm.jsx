import React from 'react'

export default function SignInForm() {
  return (
    <form className='flex flex-col m-1 p-8 max-w-[500px]'> 
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
