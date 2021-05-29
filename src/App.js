import React from 'react';
import { withTranslation } from 'react-i18next';

function App({ t }) {

    return (
        <React.Fragment>
            {t('test')}
        </React.Fragment>
    )
}

export default withTranslation()(App);