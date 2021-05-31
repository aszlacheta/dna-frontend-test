import React from 'react';
import { Menu as MenuAntd } from 'antd';
import { withTranslation } from 'react-i18next';
import { UserOutlined } from '@ant-design/icons';

import './Menu.less';
import { useSelector } from 'react-redux';
import MenuSelectors from './redux/Menu.selectors';

/**
 * Components used to render left side menu
 * @param t
 * @returns {JSX.Element}
 * @constructor
 */
function Menu({ t }) {
  const isCollapsed = useSelector(MenuSelectors.isCollapsed);

  return (
    <>
      <MenuAntd
        defaultSelectedKeys={['users']}
        mode="inline"
        theme="dark"
        inlineCollapsed={isCollapsed}
      >

        <div className="logo-container padding-around">
          <span>{t('Menu.Logo')}</span>
        </div>
        <MenuAntd.Item key="users" icon={<UserOutlined />}>
          {t('Menu.Users')}
        </MenuAntd.Item>
      </MenuAntd>
    </>
  );
}

export default withTranslation()(Menu);
