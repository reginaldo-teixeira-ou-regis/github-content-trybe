import { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const refresh = () => {
    setLoading(true);
    fetch(url)
      .then((result) => result.json())
      .then((datas) => setData(datas.results))
      .catch((err) => setError(err))
      .finally(setLoading(false));
  };

  useEffect(() => {
    refresh();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, error, data, refresh };
}
