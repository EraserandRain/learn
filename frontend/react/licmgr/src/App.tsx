import React from 'react';
import LicenseTable from './LicenseTable';
import { Button } from 'antd'
import { EditableProTable } from '@ant-design/pro-components';
import MyProTable from './Protable';
import MyEditableProTable from './EditableProtable';

const App = () => (
    <div className="App">
        <LicenseTable/>
        <MyProTable/>
        <MyEditableProTable/>
    </div>
)

export default App
