import { createContext, useContext } from "react";

export const AdsContext = createContext({
  ads: [],
  selectedCard: [],
  selectedBtn: "",
  type: "",
  search: "",
  handleSubmitAds: (ads) => {},
  handleSelectedCardData: () => {},
  handleSelectedBtn: () => {},
  handleType: () => {},
  handleSearch: () => {},
});

export const useAds = () => {
  return useContext(AdsContext);
};

export const AdsProvider = AdsContext.Provider;
