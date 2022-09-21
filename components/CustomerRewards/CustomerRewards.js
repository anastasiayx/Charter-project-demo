import React from 'react';
import { arrayGroupByPropertyValue, sumArrayItemPropertyNumValue } from '../../utils/array.helper'
import { Collapse, Table } from 'antd'

const CustomerRewardsTableColumn = [

    {
        title: 'Transaction ID',
        dataIndex: 't_id',
        key: 't_id',
    },
    {
        title: 'Customer ID',
        dataIndex: 'c_id',
        key: 'c_id',
    },
    {
        title: "Spent Price",
        dataIndex: 'spent',
        key: 'spent',
    },
    {
        title: "Create Date",
        dataIndex: 'create_date',
        key: 'create_date',
    },
    {
        title: "Rewards Points",
        dataIndex: 'rewards',
        key: 'rewards',
    },

]


const CustomerRewards = ({ transactions }) => {
    const formatDateTransctions = transactions.map(transction => {
        return {
            ...transction,
            key: transction.t_id,
            formatDate: transction.create_date ? transction.create_date.substring(0, 7) : undefined
        }
    })
    const formatDateMap = arrayGroupByPropertyValue(formatDateTransctions, 'formatDate');

    return <Collapse defaultActiveKey="panel-month-0">
        {
            Object.entries(formatDateMap).map(([formatDate, formatDateTransactions], index) => {
                return <Collapse.Panel header={`${formatDate}, Monthly Rewards:${sumArrayItemPropertyNumValue(formatDateTransactions, 'rewards')}`} key={`panel-month-${index}`}>
                    <Table dataSource={formatDateTransactions} columns={CustomerRewardsTableColumn} />
                </Collapse.Panel>
            })
        }
    </Collapse>


}


export default React.memo(CustomerRewards);