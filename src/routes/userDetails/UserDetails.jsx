import React, { useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  Col, Descriptions,
  Row,
  Statistic,
} from 'antd';
import { RocketOutlined, SmileOutlined } from '@ant-design/icons';
import { getUser } from './redux/User.actions';
import { ENCODED_DOT } from '../usersList/UsersList';
import UserSelectors from './redux/User.selectors';

import './UserDetails.less';

function UserDetails({ t }) {
  const { email } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(UserSelectors.user);

  useEffect(() => {
    const decodedEmail = decodeURIComponent(email.replace(new RegExp(ENCODED_DOT, 'ig'), '.'));
    dispatch(getUser(decodedEmail));
  }, []);

  return (
    <div className="user-details padding-around">
      {
        user && (
          <>
            <Row gutter={16}>
              <Col span={12}>
                <Card>
                  <Statistic title={t('UserDetails.Name')} value={user && user.name} prefix={<SmileOutlined />} />
                </Card>
              </Col>
              <Col span={12}>
                <Card>
                  <Statistic title={t('UserDetails.Username')} value={user.username} prefix={<RocketOutlined />} />
                </Card>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={30}>
                <Card>
                  <Descriptions title={t('UserDetails.UserInfo')}>
                    <Descriptions.Item label={t('UserDetails.Phone')}>{user.phone}</Descriptions.Item>
                    <Descriptions.Item label={t('UserDetails.Website')}>{user.website}</Descriptions.Item>
                    <Descriptions.Item label={t('UserDetails.Street')}>{user.address && user.address.street}</Descriptions.Item>
                    <Descriptions.Item label={t('UserDetails.ZipCode')}>
                      {user.address && user.address.zipcode}
                    </Descriptions.Item>
                    <Descriptions.Item label={t('UserDetails.City')}>{user.address && user.address.city}</Descriptions.Item>
                  </Descriptions>
                </Card>
              </Col>
            </Row>
          </>
        )
      }
    </div>
  );
}

export default withTranslation()(UserDetails);
