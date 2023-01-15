import React, { useState, useEffect } from "react";

const useData = (fetchFunction) => {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetchFunction().then((res) => {
      setData(res);
    });
  }, []);
  return data;
};

export default useData;
