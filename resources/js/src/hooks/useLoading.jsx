/* eslint-disable no-unused-expressions */
import { useEffect, useState } from "react";

export default function useLoading() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const timeOut = setTimeout(() => {
      setLoading(true);
    }, 2000);

    () => clearTimeout(timeOut);
  }, []);

  return { loading };
}
