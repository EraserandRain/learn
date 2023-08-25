import React, { useState } from 'react'
import { Table, TableColumnProps } from 'antd'
import { LicenseTableListItem, testDataSource } from './testData'
import type { ColumnsState, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';

const columns: ProColumns<LicenseTableListItem>[] = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id'
    }, {
        title: 'Region',
        dataIndex: 'region',
        key: 'region'
    }, {
        title: 'System',
        dataIndex: 'system',
        key: 'system'
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
        key: 'license_key'
    }, {
        title: 'Description',
        dataIndex: "description",
        key: "description"
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
        valueType: 'date'
    }, {
        title: "Last Updated Time",
        dataIndex: "updatedAt",
        key: "updatedAt",
        valueType: 'date'
    }, {
        title: "Action",
        key: 'option',
        width: 120,
        valueType: "option",
        render: () => [<a key="1">Edit</a>, <a key="2">Delete</a>]
    }
]

const LicenseTable = () => {
    const [columnsStateMap, setColumnsStateMap] = useState<Record<string, ColumnsState>>({
        description: {
            show: false,
        },
        license_key: {
            show: false,
        },
        createdAt: {
            show: false,
        },
        updatedAt: {
            show: false,
        }
    })
    return (
        <ProTable<LicenseTableListItem, { keyWord?: string }>
            columns={columns}
            request={(params) => Promise.resolve({
                data: testDataSource.filter((item) => {
                    if (!params?.keyWord) {
                        return true
                    }
                    if (item.region.includes(params?.keyWord) || item.system.includes(params?.keyWord)) {
                        return true
                    }
                    return false
                }),
                success: true
            })}
            options={{ search: true }}
            rowKey="key"
            columnsState={{
                value: columnsStateMap,
                onChange: setColumnsStateMap
            }}
            search={false}
            dateFormatter="string"
            headerTitle="License Record"
        />
    )
}; export default LicenseTable;
