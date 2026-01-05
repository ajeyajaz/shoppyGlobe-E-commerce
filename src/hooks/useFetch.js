import { useState, useEffect } from "react";
import axios from "axios";

// Common hook to fetch data and handle loading and error states
// Runs again only when the API URL changes


function useFetch(url) {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loader, setLoader] = useState(false);

    useEffect(() => {

        const controller = new AbortController();

        setLoader(true);
        setError(null);

        axios.get(url, {signal: controller.signal})
            .then((res) => setData(res.data))
            .catch((e) => {
                if(axios.isCancel(e)) console.log('previous request abort');
                else setError(e.message);
            })
            .finally(() => setLoader(false));

        return () => controller.abort();

    }, [url]);

    return { data, error, loader }
}


export default useFetch;