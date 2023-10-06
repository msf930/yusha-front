import { useContext } from "react";
import { LanguageContext } from "../../multilingualContext/context.js";
import { translations } from "../../multilingualContext/translations.js";

/**
 * Utility function to generate text dependent on the language
 * @param {React Component props} props destructured just for the contentID
 * @returns
 */
export default function MultiLingualContent({ contentID }) {
    const { language } = useContext(LanguageContext);

    return translations[language][contentID];
}