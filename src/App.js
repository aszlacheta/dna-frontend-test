import React from 'react';
import { withTranslation } from 'react-i18next';

/**
 * Root component for the test application
 * @param t {Object} translations object
 * @returns {JSX.Element}
 * @constructor
 */
function App({ t }) {

    return (
        <React.Fragment>
            {t('test')}
        </React.Fragment>
    )
}

export default withTranslation()(App);