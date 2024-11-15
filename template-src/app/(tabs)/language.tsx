import { View, Text, Button } from 'react-native';
import { useTranslation } from "react-i18next";
import { change_language } from '@/utils/helpers';


export default function LanguageScreen() {
    const { t } = useTranslation();

    return (
        <View>
            <Text>{t('my_welcome_message')}</Text>
            <Button title='Arabic' onPress={() => change_language('ar')} />
            <Button title='English' onPress={() => change_language('en')} />
        </View>
    );
};
