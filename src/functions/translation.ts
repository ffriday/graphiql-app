import { LANGUAGES, ParamKeys } from "../constants";
import { TranslationMap, Translations } from "../providers";

export const loadLocale = async (
  language: LANGUAGES,
): Promise<TranslationMap> => {
  try {
    const locale = await fetch(
      `/langs/translation.${language.toLowerCase()}.json`,
      { headers: { "Content-Type": "application/json" } },
    );
    return await locale.json();
  } catch (e) {
    console.error(e);
  }
  return {};
};

export const loadDefaultTranslation = async () => {
  const prevLanguage = window.localStorage.getItem(ParamKeys.language) ?? "";
  const currentLanguageKey =
    prevLanguage in LANGUAGES ? (prevLanguage as LANGUAGES) : LANGUAGES.EN;

  const languages = Object.values(LANGUAGES).reduce<Translations>(
    (acc, key) => {
      acc[key] = {};
      return acc;
    },
    {} as Translations,
  );

  languages[currentLanguageKey] = await loadLocale(currentLanguageKey);

  return languages;
};
