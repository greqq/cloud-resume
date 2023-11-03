"use client";
import { useState, useEffect } from "react";

function VisitorCounter() {
  const [visitCount, setVisitCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    let isMounted = true;
    fetch(apiUrl, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setVisitCount(data.unique_visits);
          setLoading(false);
        } 
      })
      .catch((error) => console.error("Error:", error));

    return () => {
      isMounted = false; // cleanup: set isMounted to false when component is unmounted
    };
  }, []);

  return <div>{loading ? "Loading..." : `Visits: ${visitCount}`}</div>;
}

export default VisitorCounter;
