import React, { Component } from "react";
import { FriendListView } from "./views";
import CreateFriendForm from './components/CreateFriendForm'
import UpdateFriendForm from './components/UpdateFriendForm'


class App extends Component {
  render() {
    return <div>
    <FriendListView />
            <CreateFriendForm/>
            <UpdateFriendForm/>
            </div>;
  }
}

export default App;
