import React from 'react';
import { withTranslation } from 'react-i18next';
import axios from 'axios';

/**
 * Root component for the test application
 * @param t {Object} translations object
 * @returns {JSX.Element}
 * @constructor
 */
function App({ t }) {

    axios.get(process.env.BACKEND_URL + '/users').then(response => {
        console.log(response);
    });

    return (
        <React.Fragment>
            {t('test')}
        </React.Fragment>
    )
}

export default withTranslation()(App);