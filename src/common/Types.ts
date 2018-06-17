import { Types as RXTypes } from 'reactxp';

export interface TextI18nProps extends RXTypes.CommonStyledProps<RXTypes.ViewStyleRuleSet> {
    toTranslate: string,
    customization?: object,
    translations: object,
}
