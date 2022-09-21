import { useFetchingWithMount } from './useFetchingWithMount';
import { fetchTransactions } from '../services/transactions.service';
export const useTransactions = () => {
    //TODO: hanlde all transactions logic here
    const [res, isLoading, error] = useFetchingWithMount(fetchTransactions)
    return [res, isLoading, error]
} 