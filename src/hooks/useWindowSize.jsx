import debounce from "lodash/debounce";
import { useCallback, useEffect, useState } from "react";

const useWindowSize = () => {
  const [width, setWidth] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const windowListener = useCallback(
    debounce(() => {
      if (window) setWidth(window.innerWidth);
    }, 250),
    []
  );
  useEffect(() => {
    if (window) {
      setWidth(window.innerWidth);
      window.addEventListener("resize", windowListener);
    }

    return () => {
      windowListener.cancel();
      window && window.removeEventListener("resize", windowListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return width;
};

export default useWindowSize;
