import React from "react";
import { fetchTransactions } from '../../services/transactions.service';
import { Collapse, Typography } from 'antd';
import CustomerRewards from '../CustomerRewards/CustomerRewards'
import { arrayGroupByPropertyValue, sumArrayItemPropertyNumValue } from '../../utils/array.helper'
import { TRANSACTIONS } from '../../constants/transactions.constant';
import { useTransactions } from '../../hooks/useTransactions'




const TransactionRewards = () => {
    const [customerTransactionsMap, setcustomerTransactionsMap] = React.useState({});
    const [res, isLoading, eror] = useTransactions()
    React.useEffect(() => {
        if (res?.data?.resultData) {
            const customerMap = arrayGroupByPropertyValue(res.data.resultData, 'c_id')
            setcustomerTransactionsMap(customerMap)
        }
    }, [res])

    const renderCustomerRewards = React.useMemo(() => {
        return <Collapse defaultActiveKey="panel-customer-0">
            {
                Object.entries(customerTransactionsMap).map(([customerId, customerTransactions], index) => {
                    return <Collapse.Panel header={`Customer ID:${customerId}, Total Rewards:${sumArrayItemPropertyNumValue(customerTransactions, 'rewards')}`} key={`panel-customer-${index}`}>
                        <CustomerRewards transactions={customerTransactions} />
                    </Collapse.Panel>
                })
            }
        </Collapse>

    }, [customerTransactionsMap])


    return <section>
        <header>
            <Typography.Title role="heading">{TRANSACTIONS.PORTAL_TITLE}</Typography.Title>
        </header>

        {
            isLoading ? <span className="loading-spinner">Loading...</span> : renderCustomerRewards
        }

    </section>;
}

export default TransactionRewards