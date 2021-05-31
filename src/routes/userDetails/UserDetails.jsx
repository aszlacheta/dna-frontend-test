import React, { useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { Descriptions } from 'antd';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUser } from './redux/User.actions';

function UserDetails({ t }) {
  const { username } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(username));
  }, []);

  return (
    <Descriptions title="User Info" className="padding-around">
      <Descriptions.Item label="UserName">Jan Kowalski</Descriptions.Item>
    </Descriptions>
  );
}

export default withTranslation()(UserDetails);
