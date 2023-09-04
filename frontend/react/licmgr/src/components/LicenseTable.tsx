import React, { useState, useRef } from 'react'
import { Form, Button, Input, Space } from 'antd'
import { LicenseType, defaultData } from './testData'
import type { ColumnsState, ProColumns, ActionType } from '@ant-design/pro-components';
import { EditableProTable, ProCard, ProFormField, ProFormRadio } from '@ant-design/pro-components';
import en_US from 'antd/es/calendar/locale/en_US';
// import "moment/dist/locale/en_US"

const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};

const LicenseTable = () => {
    const actionRef = useRef<ActionType>()
    const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([])
    const [dataSource, setDataSource] = useState<readonly LicenseType[]>([])
    const [form] = Form.useForm()

    const columns: ProColumns<LicenseType>[] = [
        {
            title: 'ID',
            dataIndex: 'id',
            readonly: true,
            width: '5%'
        }, {
            title: 'Region',
            dataIndex: 'region',
            filters: true,
            onFilter: true,
            valueType: 'select',
            request: async () => [
                {
                    value: 0,
                    label: 'Japan',
                },
                {
                    value: 1,
                    label: 'Europe',
                },
                {
                    value: 2,
                    label: 'NA',
                },
            ]
        }, {
            title: 'System',
            dataIndex: 'system',
            filters: true,
            onFilter: true,
            valueType: 'select',
            request: async () => [
                {
                    value: 'crm',
                    label: 'CRM',
                },
                {
                    value: 'erp',
                    label: 'ERP',
                },
                {
                    value: 'email',
                    label: 'Email',
                },
            ]
        }, {
            title: "AAI ID",
            dataIndex: 'aai_id',
            key: 'aai_id'
        }, {
            title: 'Micron ID',
            dataIndex: 'micron_id',
            key: 'micron_id'
        }, {
            title: 'Serial_Number',
            dataIndex: 'serial_number',
            key: 'serial_number'
        }, {
            title: 'UUID',
            dataIndex: 'uuid',
            key: 'uuid'
        }, {
            title: 'License Key',
            dataIndex: 'license_key',
            key: 'license_key',
            hideInSetting: true
        }, {
            title: 'Description',
            dataIndex: "desc",
        }, {
            title: 'Is Expired',
            dataIndex: 'is_expired',
            key: 'is_expired',
            readonly: true
        }, {
            title: 'Expiration_Date',
            dataIndex: 'expiration_date',
            key: 'expiration_date',
            valueType: 'date'
        }, {
            title: 'Created_Time',
            dataIndex: 'createdAt',
            key: 'createdAt',
            valueType: 'date',
            hideInSearch: true,
            readonly: true
        }, {
            title: "Last_Updated_Time",
            dataIndex: "updatedAt",
            key: "updatedAt",
            valueType: 'date',
            hideInSearch: true,
            readonly: true
        }, {
            title: "Action",
            key: 'option',
            width: '10%',
            valueType: "option",
            render: (text, record, _, action) => [
                <a key="editable" onClick={() => { action?.startEditable?.(record.id) }}>Edit</a>,
                <a key="delete" onClick={() => { setDataSource(defaultData.filter((item) => item.id !== record.id)) }}>Delete</a>
            ]
        }
    ]
    return (
        <>
            <Space>
                <Button
                    type="primary"
                    onClick={() => {
                        actionRef.current?.addEditRecord?.({
                            id: (Math.random() * 1000000).toFixed(0),
                            title: '新的一行',
                        });
                    }}
                >
                    Add
                </Button>
                <Button
                    key="rest"
                    onClick={() => {
                        form.resetFields();
                    }}
                >
                    Reset
                </Button>
            </Space>
                <EditableProTable<LicenseType>
                    locale={en_US}
                    rowKey="id"
                    scroll={{
                        x: 960,
                    }}
                    actionRef={actionRef}
                    headerTitle="License Record"
                    maxLength={5}
                    recordCreatorProps={false}
                    columns={columns}
                    request={async () => ({
                        data: defaultData,
                        total: 3,
                        success: true,
                    })}
                    value={dataSource}
                    onChange={setDataSource}
                    columnsState={{
                        value: {
                            desc: {
                                show: false
                            },
                            createdAt: {
                                show: false
                            },
                            updatedAt: {
                                show: false
                            }
                        },
                        // onChange: setColumnsStateMap,
                    }}
                    options={{
                        search: true,
                        reload: true,
                        density: false
                    }}
                    dateFormatter="string"
                    pagination={{ 
                        defaultPageSize: 10,
                        current: 1,
                        showTotal: (total) => `${total} items total`, 
                        showSizeChanger: true, 
                        pageSizeOptions: ['10', '20', '30'] 
                    }}
                    editable={{
                        form,
                        editableKeys,
                        onSave: async () => {
                            await waitTime(2000);
                        },
                        onChange: setEditableRowKeys,
                        actionRender: (row, config, dom) => [dom.save, dom.cancel],
                    }}
                />
            </>
            )
}
            export default LicenseTable;
