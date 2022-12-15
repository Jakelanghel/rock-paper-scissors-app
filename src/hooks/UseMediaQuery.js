import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener("resize", listener);
    return () => media.removeEventListener("resize", listener);
  }, [matches, query]);
  return matches;
};

export const useIsLarge = () => useMediaQuery("(min-width: 950px)");
