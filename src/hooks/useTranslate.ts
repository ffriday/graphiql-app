import { useContext } from "react";
import { TranslateContext, TranslationFunction } from "../providers";
import { LangPages } from "../constants";

export const useTranslate = (page: LangPages): TranslationFunction => {
  const { locale } = useContext(TranslateContext);

  const translate: TranslationFunction = (key: string) => {
    if (locale[page] && locale[page][key]) return locale[page][key];
    return key;
  };

  return translate;
};
