import { Form, useActionData, useNavigation } from 'react-router-dom';
import Button from '../UI/Button';

export default function AuthFrom() {
  const data = useActionData();
  const navigation = useNavigation();

  console.log(data);

  const isSubmitting = navigation.state === 'submitting';

  return (
    <div className='login'>
      <h1>Log in</h1>
      {data && data.errors && (
        <ul>
          {Object.keys(data.errors).map(err => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      {data && data.message && <p>{data.message}</p>}
      <Form method='post'>
        <input type='email' placeholder='Email' name='email' required />
        <input type='password' placeholder='Password' name='password' required />
        <Button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}</Button>
      </Form>
    </div>
  );
}
