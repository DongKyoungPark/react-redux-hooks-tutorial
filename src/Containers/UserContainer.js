import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../Redux/Reducers/UserReducer';

const UserContainer = memo(({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  console.log('userData', userData);
  console.log('userData.users', userData.users);

  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>{userData && userData.users && userData.users.map((user) => <p key={user.id}>{user.name}</p>)}</div>
    </div>
  );
});

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
