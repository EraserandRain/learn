import React from 'react';
import LicenseTable from './LicenseTable';
import { Button } from 'antd'
import { ProTable } from '@ant-design/pro-components';
import MyProTable from './Protable';

const App = () => (
    <div className="App">
        <LicenseTable/>
        <MyProTable/>
    </div>
)

export default App
