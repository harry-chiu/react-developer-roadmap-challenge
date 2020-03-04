import React, { useState } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';

import en_US from './locale/en_US';
import zh_TW from './locale/zh_TW';

const messages = {};
messages.en = en_US;
messages.zh = zh_TW;

const App = () => {

    const [language, setLanguage] = useState('en');

    return (
        <>
            <IntlProvider locale={language} messages={messages[language]}>
                <h1>
                    <FormattedMessage id="hello" />
                </h1>
                <h1>
                    <FormattedMessage id="helloSomeone" values={{ name: "Evelyn" }} />
                </h1>
            </IntlProvider>
            <button onClick={() => setLanguage('zh')}>zh</button>
            <button onClick={() => setLanguage('en')}>en</button>
        </>
    );
};

export default App;