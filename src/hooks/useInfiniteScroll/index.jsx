import axios from 'axios';
import { useState, useEffect } from 'react';

// https://jsonplaceholder.typicode.com/posts?_page=1

const useInfiniteScroll = (pageNumber, BASE_URL) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(BASE_URL, { params: { page: pageNumber } });

      setApiData((prev) => [...prev, ...data.freelancerSimpleResponseList.map((item) => item)]);

      setLoading(false);
    } catch (error) {
      setLoading(true);
      setError(true);
      console.error(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchData();
  }, [pageNumber]);

  return { loading, error, apiData, hasMore };
};

export default useInfiniteScroll;
