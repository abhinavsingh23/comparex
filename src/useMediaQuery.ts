import React from "react";
import { MOBILE_SCREEN_BREAKPOINT } from "./constants";

export const initMatches = (query: string) => {
  if (typeof window === "undefined") {
    return false;
  }

  const mql = window.matchMedia(query);
  return mql.matches;
};

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = React.useState<boolean>(() =>
    initMatches(query)
  );

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export const useIsMobileScreen = () => {
    const isNotMobileScreen = useMediaQuery(`(min-width: ${MOBILE_SCREEN_BREAKPOINT}px)`);
    return !isNotMobileScreen;
  };
  