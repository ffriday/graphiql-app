import { useContext } from "react";
import {
  TranslateContext,
  TranslationFunction,
} from "../providers/TranslateProvider";

export const useTranslate = (): TranslationFunction => {
  const { translate } = useContext(TranslateContext);
  return translate;
};
