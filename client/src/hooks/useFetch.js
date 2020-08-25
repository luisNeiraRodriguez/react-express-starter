import React from 'react';

function useFetch(url) {
  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(url);
        const data = await result.json();

        setState(data);
        console.log('data fetched...', data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [url]);

  return state;
}

export default useFetch;
