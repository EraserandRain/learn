import React, { useState, useRef } from 'react'
import { Form, Button, Input, Space } from 'antd'
import { LicenseType, testDataSource, examples } from './testData'
import type { ColumnsState, ProColumns, ActionType } from '@ant-design/pro-components';
import { EditableProTable, ProCard, ProFormField, ProFormRadio } from '@ant-design/pro-components';

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
            valueEnum: examples.regionEnum
        }, {
            title: 'System',
            dataIndex: 'system',
            filters: true,
            onFilter: true,
            valueType: 'select',
            valueEnum: examples.systemEnum
        }, {
            title: "AAI ID",
            dataIndex: 'aai_id',
            key: 'aai_id'
        }, {
            title: 'Micron ID',
            dataIndex: 'micron_id',
            key: 'micron_id'
        }, {
            title: 'Serial Number',
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
            key: 'is_expired'
        }, {
            title: 'Expiration_date',
            dataIndex: 'expiration_date',
            key: 'expiration_date',
            valueType: 'date'
        }, {
            title: 'Created Time',
            dataIndex: 'createdAt',
            key: 'createdAt',
            valueType: 'date',
            hideInSearch: true
        }, {
            title: "Last Updated Time",
            dataIndex: "updatedAt",
            key: "updatedAt",
            valueType: 'date',
            hideInSearch: true
        }, {
            title: "Action",
            key: 'option',
            width: '10%',
            valueType: "option",
            render: (text, record, _, action) => [
                <a key="editable" onClick={() => { action?.startEditable?.(record.id) }}>Edit</a>,
                <a key="delete" onClick={() => { setDataSource(testDataSource.filter((item) => item.id !== record.id)) }}>Delete</a>
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
                rowKey="id"
                actionRef={actionRef}
                columns={columns}
                recordCreatorProps={false}
                request={async () => ({
                    data: testDataSource,
                    total: 3,
                    success: true,
                })}
                value={dataSource}
                onChange={setDataSource}
                options={{ search: true }}
                dateFormatter="string"
                headerTitle="License Record"
                pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '20', '30'] }}
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
}; export default LicenseTable;
