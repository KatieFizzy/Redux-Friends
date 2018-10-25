import React from "react";
import { connect } from "react-redux";
import { fetchFriends } from "../actions"
import FriendContainer from "../components/FriendContainer";
// import actions

class FriendListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchFriends()
  }

  render() {
    if (this.props.fetching) {
      return <h3>Fetching Friends ...</h3>
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <FriendContainer friendList={this.props.friendList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friendList: state.friendReducer.friendList,
    isFetching: state.friendReducer.isFetching,
    error: state.friendReducer.error
  }
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    fetchFriends
  }
)(FriendListView);
