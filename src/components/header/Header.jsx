import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import { Button, Tooltip } from 'antd';
import { LeftOutlined, LogoutOutlined, RightOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../menu/redux/Menu.actions';
import MenuSelectors from '../menu/redux/Menu.selectors';
import UserService from '../../services/UserService';

import './Header.less';

/**
 * Component used to render header top bar
 * @param t
 * @returns {JSX.Element}
 * @constructor
 */
function Header({ t }) {
  const [isLogoutDisabled] = useState(true);
  const dispatch = useDispatch();
  const isCollapsed = useSelector(MenuSelectors.isCollapsed);

  const onToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="header-container padding-around">
      <div>
        <Tooltip title={isCollapsed ? t('Header.Expand') : t('Header.Collapse')}>
          <Button
            type="primary"
            shape="round"
            icon={isCollapsed ? <RightOutlined /> : <LeftOutlined />}
            onClick={onToggleMenu}
          />
        </Tooltip>
      </div>
      <div>
        <div className="user-container">
          <span>{t('Header.HelloMessage', { name: UserService.user.firstName })}</span>
          <Tooltip title={t('Header.Logout.Tooltip')} placement="left">
            <Button
              type="primary"
              shape="round"
              icon={<LogoutOutlined />}
              disabled={isLogoutDisabled}
            >
              {t('Header.Logout.Label')}
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(Header);
