import React from 'react';

const CreateFriendForm = props => {
  return (
    <div>
      <form id="style" onSubmit={props.formFieldHandler} > 
          <input type="text" name="newName" value={props.newName}  placeholder="Add Name" onChange={props.nameHandler}/>
          <input type="text" name="newAge" value={props.newAge}placeholder="Add Age" onChange={props.ageHandler}  />
          <input type="text" name="newEmail" value={props.newEmail} placeholder="Add Email"onChange={props.emailHandler} />
          <button onClick={props.formFieldHandler} value='add'> add </button>
      </form>
    </div>
  );
};

export default CreateFriendForm;