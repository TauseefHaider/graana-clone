import { createContext, useContext } from "react";

export const AdsContext = createContext({
  ads: [],

  handleSubmitAds: (ads) => {},
});

export const useAds = () => {
  return useContext(AdsContext);
};

export const AdsProvider = AdsContext.Provider;
