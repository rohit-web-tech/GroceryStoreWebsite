import { useEffect, useState } from "react";
import { fetchGetDataFromApi} from "../utiles/api";
const useFetch = (url,params) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        setData(null);
        setError(null);
            fetchGetDataFromApi(url,params)
            .then((res) => {
                setLoading(false);
                setData(res);
            })
            .catch((err) => {
                setLoading(false);
                setError("Something went wrong!");
            });
            
    }, [url]);

    return { data, loading, error };
};

export default useFetch ;