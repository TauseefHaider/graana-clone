import { createContext, useContext } from "react";

export const AdsContext = createContext({
  ads: [],
  selectedCard: [],
  handleSubmitAds: (ads) => {},
  handleSelectedCardData: () => {},
});

export const useAds = () => {
  return useContext(AdsContext);
};

export const AdsProvider = AdsContext.Provider;
