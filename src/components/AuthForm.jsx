import { useState } from 'react';
import { Form } from 'react-router-dom';

export default function AuthFrom() {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  return (
    <div className='login'>
      <h1>Register</h1>
      <Form method='post'>
        <input type='email' placeholder='Email' name='email' required />
        <input
          type='password'
          placeholder='Password'
          name='password'
          required
        />
        <input type='submit' />
        {/* <button>Save</button> */}
      </Form>
    </div>
  );
}
