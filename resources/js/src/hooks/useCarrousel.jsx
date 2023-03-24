import { useState, useEffect } from "react";

export default function useCarrousel(size) {
  const [index, setIndex] = useState(0);
  const [autoIdx, setAutoIdx] = useState(0);

  function toggleBack() {
    setIndex((prevIndex) => (prevIndex === 0 ? size - 1 : prevIndex - 1));
  }

  function toggleNext() {
    setIndex((prevIndex) => (prevIndex === size - 1 ? 0 : prevIndex + 1));
  }

  const updateIndex = (i) => {
    setIndex(() => i);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAutoIdx((idx) => (idx === size - 1 ? 0 : idx + 1));
    }, 18000);

    return () => {
      clearInterval(interval);
    };
  }, [size]);

  return {
    index,
    autoIdx,
    toggleNext,
    toggleBack,
    updateIndex,
  };
}
