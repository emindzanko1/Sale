import { json, redirect, useLocation } from 'react-router-dom';
import AuthFrom from '../components/AuthForm';

export default function AuthenticationPage() {
  return <AuthFrom />;
}

export async function action({ request }) {
  const url = new URL(request.url);
  const path = url.pathname; 
  console.log(path);

  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };


  const response = await fetch('http://localhost:3000' + path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: 'Could not authenticate user.' }, { status: 500 });
  }

  return redirect('/');
}
