import React from 'react';
import UpdateFriendForm from './UpdateFriendForm.js'


const Friend = props => {
  return <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.email}</p>
        <UpdateFriendForm updateFieldHandler={props.updateFieldHandler} emailHandler={props.emailHandler} ageHandler={props.ageHandler} nameHandler={props.nameHandler}/>
       
  </div>
};

export default Friend;