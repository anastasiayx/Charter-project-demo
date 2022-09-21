
import { transactions } from '../../../db/db.mock'
import { SuccessModel, ErrorModel } from '../../../model/api.model';

const getTransctionsByCustomerIdMock = async (customerId) => {
    return transactions.filter(transaction => transaction.c_id === customerId)
}
export default async function hanlder(req, res) {
    const { id } = req.query;
    try {
        const transactions = await getTransctionsByCustomerIdMock(id);
        res.status(200).json(new SuccessModel(transactions))
    } catch (err) {
        res.status(500).json(new ErrorModel(err))
    }
};