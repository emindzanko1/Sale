export default function Login() {
  return (
    <div className='login'>
      <h1>Login</h1>
      <form action='POST'>
        <input type='email' onChange={e => setEmail(e.target.value)} placeholder='Email' name='' id='' />
        <input type='password' onChange={e => setPassword(e.target.value)} placeholder='Password' name='' id='' />

        <input type='submit' />
      </form>
    </div>
  );
}
