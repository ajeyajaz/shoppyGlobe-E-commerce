import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {

    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        axios.get(url)
            .then((res) => setData(res.data))
            .catch((e) => setError(e.message))
            .finally(() => setLoader(false));
    }, []);

    return { data, error, loader }
}


export default useFetch;