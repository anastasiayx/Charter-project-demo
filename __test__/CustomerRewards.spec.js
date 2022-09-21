import { render } from '@testing-library/react'
import CustomerRewards from '../components/CustomerRewards/CustomerRewards'
import './matchMediaMock'
describe('TransactionsRewards', () => {
    const customerTransactionsMock = [
        {
            t_id: "1",
            spent: 130,
            create_date: new Date("8/29/22").toISOString(),
            rewards: 110,
            c_id: "sdfs34234fss"
        },
        {
            t_id: "2",
            spent: 200,
            create_date: new Date("7/29/22").toISOString(),
            rewards: 250,
            c_id: "sdfs34234fss"
        },
        {
            t_id: "3",
            spent: 30,
            create_date: new Date("6/29/22").toISOString(),
            rewards: 0,
            c_id: "sdfs34234fss"
        },
        {
            t_id: "4",
            spent: 187,
            create_date: new Date("7/29/22").toISOString(),
            rewards: 224,
            c_id: "sdfs34234fss"
        },
        {
            t_id: "9",
            spent: 187,
            create_date: new Date("8/29/22").toISOString(),
            rewards: 224,
            c_id: "sdfs34234fss"
        }
    ]

    it('should match snap shot', () => {
        const { asFragment } = render(<CustomerRewards transactions={customerTransactionsMock} />)
        expect(asFragment()).toMatchSnapshot()
    })

    it('should render customer pannels group by yyyy/mm/dd', () => {
        const { getByText } = render(<CustomerRewards transactions={customerTransactionsMock} />)
        expect(getByText("2022-08, Monthly Rewards:334")).toBeInTheDocument()
        expect(getByText("2022-07, Monthly Rewards:474")).toBeInTheDocument()
        expect(getByText("2022-06, Monthly Rewards:0")).toBeInTheDocument()
    })
})