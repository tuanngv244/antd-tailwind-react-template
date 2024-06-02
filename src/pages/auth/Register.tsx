import { Form } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Register = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const [password, setPassword] = React.useState<string>('');
  const [verification, setVerification] = React.useState<{
    alias?: string;
    email?: string;
  }>({
    alias: undefined,
    email: undefined,
  });

  const onFinish = async (values: any) => {};

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return <></>;
};

export default Register;
