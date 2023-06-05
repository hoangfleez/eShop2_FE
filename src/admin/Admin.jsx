
import React from 'react';
import List from '../pages/product/List';
import Excel from '../pages/product/Excel';
import { Outlet } from 'react-router-dom';

const Admin = () => {
  return (
    <div>
      <Outlet>

      </Outlet>
    </div>
  );
};

export default Admin;