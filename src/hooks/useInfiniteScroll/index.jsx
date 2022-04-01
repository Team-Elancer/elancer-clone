import axios from 'axios';
import { useState, useEffect } from 'react';

// https://jsonplaceholder.typicode.com/posts?_page=1

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

const useInfiniteScroll = (pageNumber) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(BASE_URL, { params: { _page: pageNumber, _limit: 10 } });

      setApiData((prev) => [...prev, ...response.data.map((item) => item)]);
      setHasMore(response.data.length > 0);
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
