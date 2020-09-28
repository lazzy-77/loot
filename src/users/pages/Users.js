import React from 'react';

import UserList from '../components/UserList';

const Users = (params) => {
  const USERS = [
    {
      id: 'u1',
      name: 'Lance Nieva',
      image:
        'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      products: 5,
    },
  ];

  return <UserList items={USERS} />;
};

export default Users;
