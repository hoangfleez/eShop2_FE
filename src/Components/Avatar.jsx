import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';
import { deepPurple } from '@mui/material/colors';

export default function UserAvatar() {
  const user = useSelector(({ user }) => {
    return user.currentUser;
  });
  let name =user["username"]

  return (
    <Stack>
      <Avatar sx={{ bgcolor: deepPurple[500]}} > {name[0]}</Avatar>
    </Stack>
  );
}