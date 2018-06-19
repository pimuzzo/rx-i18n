# reactxp-i18n
This module provides cross-platform support for i18n within the [ReactXP](https://microsoft.github.io/reactxp/) library.

This module uses [react-native-i18n](https://github.com/AlexanderZaytsev/react-native-i18n) and [i18n-js](https://github.com/fnando/i18n-js)

## Install

`yarn add` or `npm install`

## Example
```
import { default as RXI18n } from 'reactxp-i18n';

const translations = {
    it: {
        greeting: 'Ciao!',
    },
    en: {
        greeting: 'Hi!',
    },
    fr: {
        greeting: 'Bonjour!',
    },
};

<RX.View>
    <RXI18n toTranslate={ 'greeting' } translations={ translations } />
</RX.View>
```

You can pass additional parameters in `customization` object to enforce some properties as `{locale: 'en'}` or for value interpolation.
