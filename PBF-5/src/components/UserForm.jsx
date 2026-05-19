import React from 'react';
import useInput from '../hooks/useInput';

export default function UserForm() {

  const [firstName, bindFirstName, resetFirstName] = useInput('Hendra');
  const [lastName, bindLastName, resetLastName] = useInput('Permana')
  const [title, setTitle] = React.useState('')

  const submitHandler = e => {
    e.preventDefault();

    setTitle(`Hello ${firstName} ${lastName}`)
    resetFirstName();
    resetLastName();
  }

  return (
    <>
      <h3>{title}</h3>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input
            {...bindFirstName}
            type='text' />
        </div>

        <div>
          <label>Last Name</label>
          <input
            {...bindLastName}
            type='text' />
        </div>

        <button>Submit</button>
      </form>
    </>
  )
}