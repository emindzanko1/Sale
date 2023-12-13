export default function ItemForm({onSubmit, children}) {

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onSubmit(data);
  }
  return (
    <form id='event-form' onSubmit={handleSubmit}>
      <p>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' name='title' />
      </p>
      <p className='control'>
        <label htmlFor='description'>Description</label>
        <textarea id='description' name='description' />
      </p>
      <p>
        <label htmlFor='image'>Image</label>
        <input id='image' type='url' name='image' />
      </p>
      <p>
        <label htmlFor='price'>Price</label>
        <input type='number' id='price' name='price' />
      </p>
      <p className='form-actions'>{children}</p>
    </form>
  );
}
