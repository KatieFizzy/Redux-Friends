import React from 'react';
import Friend from './Friend';

const FriendContainer= props => {
    console.log(props)
    return (
    <div>
    {props.friendList.map(friend => (
    <Friend key={friend.id} name={friend.name} age={friend.age} email={friend.email} updateFieldHandler={props.updateFieldHandler} emailHandler={props.emailHandler} ageHandler={props.ageHandler} nameHandler={props.nameHandler} idHandler={props.idHandler}/>
    ))}
    </div>
    )
}
export default FriendContainer;