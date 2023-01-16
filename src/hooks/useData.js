import React, { useState, useEffect } from "react";

const useData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError("");
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((fetchedData) => {
        setData(fetchedData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  return { data, error, isLoading };
};

export default useData;
