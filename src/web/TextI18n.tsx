import React = require('react');
import RX = require('reactxp');
import Types = require('../common/Types');
import I18n = require('i18n-js');
import { getCurrentLocale } from "./Locale";

class TextI18n extends RX.Component<Types.TextI18nProps, {}> {
    render() {
        I18n.fallbacks = true;
        I18n.locale = getCurrentLocale();
        I18n.translations = this.props.translations;
        return <span>{I18n.t(this.props.toTranslate, this.props.customization)}</span>
    }
}

export default TextI18n;
