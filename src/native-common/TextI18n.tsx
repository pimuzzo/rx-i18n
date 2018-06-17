import React = require('react');

import RX = require('reactxp');
import Types = require('../common/Types');
import { Text } from 'react-native';
import I18n from 'react-native-i18n';

class TextI18n extends RX.Component<Types.TextI18nProps, {}> {
    render() {
        I18n.fallbacks = true;
        I18n.translations = this.props.translations;
        return <Text>{I18n.t(this.props.toTranslate, this.props.customization)}</Text>;
    }
}

export default TextI18n;
