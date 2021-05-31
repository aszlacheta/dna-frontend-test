import React from 'react';
import { withTranslation } from 'react-i18next';

/**
 * Component used to render information for the user that route is not found
 * @param t
 * @returns {JSX.Element}
 * @constructor
 */
function NotFound({ t }) {
  return (
    <div>
      {t('Errors.NotFound')}
    </div>
  );
}

export default withTranslation()(NotFound);
