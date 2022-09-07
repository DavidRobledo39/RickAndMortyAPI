import React from 'react'

export default function Form() {
    function handleSubmit() {}
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type='text' name='name'/>
        <input type='text' name='origin'/>
        <input type='text' name='specie'/>
        <input type='text' name='image'/>

        <input type='submit' />
    </form>

    <button>Add episode</button>
    </>
  )
}
