import I18n from 'react-native-i18n';

function getCurrentLocale(): string {
    return I18n.currentLocale();
}

export { getCurrentLocale };
