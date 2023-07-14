import { useEffect, useState } from "react";

const useDebounce = (value, delay = 500) => {
  const [debouceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, [value, delay]);

  return debouceValue;
};

export default useDebounce;
