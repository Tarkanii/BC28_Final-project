import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async function () {
      try {
        const { data } = await axios.get(url);
        setData(data);
      } catch (error) {
        throw error;
      }
    };
    fetchData();
  }, [url]);
  return data;
};
export default useFetch;
