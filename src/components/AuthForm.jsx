import { Form } from 'react-router-dom';

export default function AuthFrom() {
  return (
    <div className='login'>
      <h1>Register</h1>
      <Form method='post'>
        <input type='email' placeholder='Email' name='email' required />
        <input type='password' placeholder='Password' name='password' required />
        <input type='submit' />
      </Form>
    </div>
  );
}
