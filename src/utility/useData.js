import { useState, useEffect } from "react";
const useData = (url)=>{
  const [data, setData] = useState(null); // we are setting as null until the data we are expecting comes out
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => { 
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [url]);
  return [data, loading]
}

export default useData;


 