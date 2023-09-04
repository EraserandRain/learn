import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ConfigProvider, Spin, Alert} from 'antd'
import en_US from 'antd/es/calendar/locale/en_US';

ReactDOM.createRoot(document.getElementById('root')).render (
    <ConfigProvider locale={en_US}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </ConfigProvider>
)
