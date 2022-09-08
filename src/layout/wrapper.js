import React, { Fragment } from 'react';
import ResponsiveAppBar from './navbar';
import GetData from '../components/getData';
// import Chip from '@mui/material/Chip';
// import { Link } from 'react-router-dom';

const Layout = (props) => {
  return (
    <div className='wrapper'>
      <Fragment>
        <ResponsiveAppBar />
        <GetData />
        <main>{props.children}</main>
      </Fragment>
    </div>
  );
};

export default Layout;