import i18next from "i18next";
import { Platform } from 'react-native';


export function set_page_title(title: string): void {
    if (Platform.OS === 'web') {
        document.title = title;
    }
}


export function change_language(lang: string): void {
    i18next.changeLanguage(lang);
    if (Platform.OS === 'web') {
        // document.lang = lang;
        document.body.lang = lang;
        document.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
        set_page_title(i18next.t("my_welcome_message"));
    }
};
