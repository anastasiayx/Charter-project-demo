
import { useState, useEffect } from 'react';
export const useFetchingWithMount = (apiCallWithPromise) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [isloading, setloading] = useState(false);
    const fetchDataWithMount = () => {
        setloading(true)
        apiCallWithPromise()
            .then((res) => {
                setResponse(res);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        fetchDataWithMount();
    }, []);

    return [response, isloading, error];
};

