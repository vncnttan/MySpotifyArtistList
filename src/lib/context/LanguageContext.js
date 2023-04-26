import { createContext } from "react";
import en from "../languages/en.json"
import id from "../languages/id.json"

export const dictionaryList = {
    en, id
};

export const LANGUAGE={
    userLang: 'en',
    dict: dictionaryList.en
}

export const LanguageContext = createContext(LANGUAGE.en)