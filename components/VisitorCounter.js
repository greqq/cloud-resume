"use client";
import { useState, useEffect } from "react";

function VisitorCounter() {
  const [visitCount, setVisitCount] = useState(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    let isMounted = true; // add a flag to track component mounting status
    fetch(apiUrl, {
      method: "POST",
    })
      .then((response) => response.text())
      .then((count) => {
        if (isMounted) setVisitCount(count); // only update state if component is still mounted
      })
      .catch((error) => console.error("Error:", error));

    return () => {
      isMounted = false; // cleanup: set isMounted to false when component is unmounted
    };
  }, []);

  return <div>Visits: {visitCount}</div>;
}

export default VisitorCounter;
