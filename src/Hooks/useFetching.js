import { useEffect, useState } from "react";

function useFetching(url) {
  const [fetch, setFetch] = useState({
    data: null,
    errors: [],
  });
  useEffect(() => {
    async function fetchData(parms) {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Could not fetch");
        const fetched = await res.json();
        setFetch((prev) => ({ ...prev, data: fetched }));
      } catch (error) {
        console.error(error);
        setFetch((prev) => ({
          ...prev,
          errors: [...prev.errors, error],
        }));
      }
    }
    fetchData();
  }, [fetch, url]);
  return fetch;
}

export default useFetching;
