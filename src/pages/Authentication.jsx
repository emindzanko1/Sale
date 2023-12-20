import { json, redirect } from 'react-router-dom';
import AuthFrom from '../components/AuthForm';

export default function AuthenticationPage() {
  return <AuthFrom />;
}

export async function action({ request }) {
  const searchParam = new URL(request.url).searchParams;
  const mode = searchParam.get('mode') || 'login';

  if (mode !== 'login' && mode !== 'register') {
    throw json({ message: 'Invalid mode.' }, { status: 422 });
  }

  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };

  const response = await fetch('http://localhost:3000/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(authData)
  });

  if(response.status === 422 || response.status === 401) {
    return response;
  }

  if(!response.ok) {
    throw json({message: 'Could not authenticate user.'}, {status : 500});
  }

  return redirect('/');
}
