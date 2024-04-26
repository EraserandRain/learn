import React, { useState, useRef } from 'react'
import { Form, Button, Input, Space } from 'antd'
import { LicenseType, defaultData } from './testData'
import type { ColumnsState, ProColumns, ActionType } from '@ant-design/pro-components';
import { EditableProTable, TableDropdown } from '@ant-design/pro-components';

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
            width: '5%',
            sorter: true
        }, {
            title: 'Region',
            dataIndex: 'region',
            disable: true,
            filters: true,
            onFilter: true,
            valueType: 'select',
            valueEnum: {
                0: { text: 'Japan' },
                1: { text: 'Europe' },
                2: { text: 'North America' },
                3: { text: 'Asia Pacific' }
            }
        }, {
            title: 'System',
            dataIndex: 'system',
            disable: true,
            filters: true,
            onFilter: true,
            valueType: 'select',
            valueEnum: {
                0: { text: 'HVM2' },
                1: { text: 'HVM3' },
                2: { text: 'ES2' },
                3: { text: 'ES3' }
            }
        }, {
            title: "AAI ID",
            dataIndex: 'aai_id',
        }, {
            title: 'Customer ID',
            dataIndex: 'customer_id',
        }, {
            title: 'S/N',
            dataIndex: 'serial_number',
        }, {
            title: 'UUID',
            dataIndex: 'uuid',
        }, {
            title: 'License Key',
            dataIndex: 'license_key',
            hideInSetting: true
        }, {
            title: 'Description',
            dataIndex: "desc",
        }, {
            title: 'Is Expired',
            dataIndex: 'is_expired',
            readonly: true,
            valueType: 'select',
            valueEnum: {
                true: { text: 'Yes' },
                false: { text: 'No' },
            }
        }, {
            title: 'Is Permanent',
            dataIndex: 'is_permanent',
            valueType: 'select',
            valueEnum: {
                true: { text: 'Yes' },
                false: { text: 'No' },
            }
        }, {
            title: 'Expiration_Date',
            dataIndex: 'expiration_date',
            valueType: 'date',
            sorter: true
        }, {
            title: 'Created_Time',
            dataIndex: 'createdAt',
            valueType: 'date',
            hideInSearch: true,
            readonly: true,
            sorter: true
        }, {
            title: "Last_Updated_Time",
            dataIndex: "updatedAt",
            valueType: 'date',
            hideInSearch: true,
            readonly: true,
            sorter: true
        }, {
            title: "Action",
            key: 'option',
            width: '10%',
            valueType: "option",
            render: (text, record, _, action) => [
                <a key="editable" onClick={() => { action?.startEditable?.(record.id) }}>Edit</a>,
                <TableDropdown
                    key="actionGroup"
                    onSelect={() => action?.reload}
                    menus={[
                        { key: 'copy', name: "Copy" },
                        {
                            key: 'delete',
                            name: "Delete",
                            onClick: () => { setDataSource(defaultData.filter((item) => item.id !== record.id)) }
                        }
                    ]}
/>
            ]
        }
    ]
return (
    <>
        <EditableProTable<LicenseType>
            rowKey="id"
            scroll={{
                x: 960,
            }}
            actionRef={actionRef}
            headerTitle="License Record"
            maxLength={5}
            // recordCreatorProps={false}
            columns={columns}
            request={async () => ({
                data: defaultData,
                total: 3,
                success: true,
            })}
            value={dataSource}
            onChange={setDataSource}
            columnsState={{
                persistenceKey: "pro-table-single-demos",
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
                density: false,
                setting: {
                    listsHeight: 600,
                }
            }}
            dateFormatter="string"
            pagination={{
                defaultPageSize: 10,
                // showTotal: (total) => `${total} pages in total`, 
                showSizeChanger: true,
                showQuickJumper: true,
                pageSizeOptions: ['10', '20', '30'],
                // onChange: (page) => console.log(page)
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
            toolBarRender={() => [
                <Button
                    type="primary"
                    onClick={() => {
                        actionRef.current?.addEditRecord?.({
                            id: (Math.random() * 1000000).toFixed(0),
                            title: 'Add',
                        });
                    }}
                >Add</Button>
            ]}
        />
    </>
)
}
export default LicenseTable;
