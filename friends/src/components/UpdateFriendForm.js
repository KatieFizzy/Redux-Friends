import React from 'react';

const UpdateFriendForm = props => {
  return (
    <div>
      <form id="style" onSubmit={props.updateFieldHandler} > 
          <input type="text" name="newName" value={props.newName}  placeholder="Update Name" onChange={props.nameHandler}/>
          <input type="text" name="newAge" value={props.newAge} placeholder="Update Age" onChange={props.ageHandler}  />
          <input type="text" name="newEmail" value={props.newEmail} placeholder="Update Email"onChange={props.emailHandler} />
          <button onClick={props.updateFieldHandler} value='Update'>Update</button>
      </form>
    </div>
  );
};

export default UpdateFriendForm;
