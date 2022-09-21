import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import TransactionsRewards from '@/components/TransactionsRewards/TransactionsRewards'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import './matchMediaMock'


describe('TransactionsRewards', () => {
    const transactionsMock = [
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
            t_id: "5",
            spent: 130,
            create_date: new Date("8/29/22").toISOString(),
            rewards: 110,
            c_id: "asdfdsffddsf"
        },
        {
            t_id: "6",
            spent: 200,
            create_date: new Date("7/29/22").toISOString(),
            rewards: 250,
            c_id: "asdfdsffddsf"
        },
        {
            t_id: "7",
            spent: 154,
            create_date: new Date("7/19/22").toISOString(),
            rewards: 158,
            c_id: "asdfdsffddsf"
        },
        {
            t_id: "8",
            spent: 43,
            create_date: new Date("7/29/22").toISOString(),
            rewards: 0,
            c_id: "asdfdsffddsf"
        }, {
            t_id: "9",
            spent: 187,
            create_date: new Date("8/29/22").toISOString(),
            rewards: 224,
            c_id: "sdfs34234fss"
        },
        {
            t_id: "10",
            spent: 130,
            create_date: new Date("6/24/22").toISOString(),
            rewards: 110,
            c_id: "asdfdsffddsf"
        },
        {
            t_id: "11",
            spent: 50,
            create_date: new Date("8/19/22").toISOString(),
            rewards: 0,
            c_id: "asdfdsffddsf"
        },
        {
            t_id: "12",
            spent: 54,
            create_date: new Date("7/26/22").toISOString(),
            rewards: 4,
            c_id: "asdfdsffddsf"
        },
        {
            t_id: "13",
            spent: 43,
            create_date: new Date("7/01/22").toISOString(),
            rewards: 0,
            c_id: "asdfdsffddsf"
        }
    ]

    const server = setupServer(
        rest.get('/api/transactions', (req, res, ctx) => {
            return res(ctx.json({ resultData: transactionsMock }))
        }),
    )

    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())


    it(' shoud match the snapshot', async () => {
        const { asFragment, queryByText } = render(<TransactionsRewards />)
        expect(asFragment()).toMatchSnapshot()
        await waitForElementToBeRemoved(() => queryByText('Loading...'));
    })


    it('renders a Transactions Rewards Portal heading', async () => {
        const { queryByText } = render(<TransactionsRewards />)
        const heading = screen.getByRole('heading', {
            name: /Transactions Rewards Portal/i,
        })
        expect(heading).toBeInTheDocument()
        await waitForElementToBeRemoved(() => queryByText('Loading...'));

    })

    it('will show customer panels after page has loaded the transaction data', async () => {
        const { queryByText } = render(<TransactionsRewards />)
        let loading = queryByText('Loading...')
        expect(loading).toBeInTheDocument()
        await waitForElementToBeRemoved(() => queryByText('Loading...'));

        expect(queryByText('Customer ID:sdfs34234fss, Total Rewards:808')).toBeInTheDocument()
        expect(queryByText('Customer ID:asdfdsffddsf, Total Rewards:632')).toBeInTheDocument()
    })
})