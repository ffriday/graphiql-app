import { http, HttpResponse } from "msw";
import * as EN from "../../public/langs/translation.en.json";
import * as RU from "../../public/langs/translation.ru.json";

const endpointLang = (language: "en" | "ru") =>
  `/langs/translation.${language}.json`;

export const handlers = [
  http.all("*", (request) => {
    console.log(request);
    console.debug(request);
  }),
  http.get(endpointLang("en"), () => {
    return HttpResponse.json(EN);
  }),
  http.get(endpointLang("ru"), () => {
    return HttpResponse.json(RU);
  }),
];
