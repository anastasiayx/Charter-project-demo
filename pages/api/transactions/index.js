
import { transactions } from '../../../db/db.mock'
import { SuccessModel, ErrorModel } from '../../../model/api.model'

const getTransctionsMock = async () => {
    return transactions
}



export default async function handler(req, res) {
    try {
        const transactions = await getTransctionsMock();
        console.log(transactions);
        res.status(200).json(new SuccessModel(transactions))
    } catch (err) {
        res.status(500).json(new ErrorModel(err))
    }
}