const locale = require('browser-locale')();
import I18n = require('i18n-js');

function getCurrentLocale(): string {
    return locale || I18n.currentLocale();
}

export { getCurrentLocale };
