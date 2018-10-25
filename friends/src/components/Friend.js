import React from 'react';
import UpdateForm from '../FriendsList/UpdateForm'


const Friend = props => {
  return <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.email}</p>
        <UpdateForm updateFieldHandler={props.updateFieldHandler} emailHandler={props.emailHandler} ageHandler={props.ageHandler} nameHandler={props.nameHandler}/>
       
  </div>
};

export default Friend;