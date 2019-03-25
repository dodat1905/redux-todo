import React from 'react';

const NewForm = (props) => {
  return (
    <form>
      <label>Add to the todo list</label>
      <input type="text" onChange={props.handleChange} />
      <button type="submit" onClick={props.addList} >Add item</button>
    </form>
  )
};

export default NewForm;
