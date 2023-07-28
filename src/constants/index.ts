export enum TextCases {
    lowerCase = 'lowercase',
    upperCase = 'UPPERCASE',
    camelCase = 'camelCase',
    capitalCase = 'Capital Case',
    constantCase = 'CONSTANT_CASE',
    dotCase = 'dot.case',
    headerCase = 'Header-Case',
    noCase = 'no case',
    paramCase = 'param-case',
    pascalCase = 'PascalCase',
    pathCase = 'path/case',
    sentenceCase = 'Sentence case',
    snakeCase = 'snake_case',
}

export enum DateTypes {
    toString = 'String',
    toISOString = 'ISO String',
    toDateString = 'Date String',
    toTimeString = 'Time String',
    toUTCString = 'UTC String',
    toLocaleTimeString = 'Locale Time String',
    toLocaleDateString = 'Locale Date String',
    toLocaleString = 'Locale String',
}

export const TEXT_CASES = [
    TextCases.lowerCase,
    TextCases.upperCase,
    TextCases.camelCase,
    TextCases.capitalCase,
    TextCases.constantCase,
    TextCases.dotCase,
    TextCases.headerCase,
    TextCases.noCase,
    TextCases.paramCase,
    TextCases.pascalCase,
    TextCases.pathCase,
    TextCases.sentenceCase,
    TextCases.snakeCase,
];

export const DATE_TYPES = [
    { value: DateTypes.toString, label: 'String' },
    { value: DateTypes.toISOString, label: 'ISO String' },
    { value: DateTypes.toDateString, label: 'Date String' },
    { value: DateTypes.toTimeString, label: 'Time String' },
    { value: DateTypes.toUTCString, label: 'UTC String' },
    { value: DateTypes.toLocaleTimeString, label: 'Locale Time String' },
    { value: DateTypes.toLocaleDateString, label: 'Locale Date String' },
    { value: DateTypes.toLocaleString, label: 'Locale String' },
];
