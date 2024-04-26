import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ConfigProvider, Spin, Alert} from 'antd'
// import {ConfigProviderWrap} from '@ant-design/pro-provider'
import en_US from 'antd/lib/locale/en_US'

ReactDOM.createRoot(document.getElementById('root')).render (
    <React.StrictMode>
        <ConfigProvider locale={en_US}>
                <App/>
        </ConfigProvider>
     </React.StrictMode> 
)
