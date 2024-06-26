import React from 'react';
import './dashboard.styles.css';
import Box1 from './dashboard-components/box-1/box-1.dashboard-component';
import Box2 from './dashboard-components/box-2/box-2.dashboard-component';
import Box3 from './dashboard-components/box-3/box-3.dashboard-component';
import Box4 from './dashboard-components/box-4/box-4.dashboard-component';
import Box5 from './dashboard-components/box-5/box-5.dashboard-component';
import Box6 from './dashboard-components/box-6/box-6.dashboard-component';
import Box7 from './dashboard-components/box-7/box-7.dashboard-component';
import Box8 from './dashboard-components/box-8/box-8.dashboard-component';

const Dashboard = () => {
  return (
    <div className='dashboard-container row'>
        <Box1 />
        <Box2 />
        <Box3 />
        <Box4 />
        <Box5 />
        <Box6 />
        <Box7 />
        <Box8 />
    </div>
  )
};

export default Dashboard;