import { userApi } from '@/apis/user';
import { ICEye, ICEyeNo, ICInfoCircle, ICKey } from '@/assets/icons';
import { PATHNAMES } from '@/configs/pathname';
import { useBoolean } from '@/hooks';
import { useClickOutSide } from '@/hooks/common/useClickOutSide';
import { IChangePassword } from '@/models/register';
import { IAccountHeader, dataSelelctAccount } from '@/models/sidebar';
import { textPassword } from '@/pages/Auth/components/FormCustom';
import { cookieStorageUtil } from '@/services/storage';
import { authActions } from '@/store/modules/auth';
import { authSelector } from '@/store/modules/auth/selector';
import { watchedField } from '@/utils/form-antd';
import { checkNullish } from '@/utils/transfer';
import { regexPassword } from '@/utils/validation';
import { useMutation } from '@tanstack/react-query';
import { Avatar, Form, Image, Input, Modal, Popover, message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Tippy from '../../../../atoms/Tippy/Tippy';
import { UserOutlined } from '@ant-design/icons';
import { queryClient } from '@/configs/queryClientProvider';
import store from '@/store';

const Account = () => {
  const { t } = useTranslation();
  const user = useSelector(authSelector);
  const ref = useRef<any>();
  const [show, { on, off }] = useBoolean(false);
  useClickOutSide(ref, off, 'popup__account');

  return (
    <div className="h-full ml-2 wapper__header-account">
      <Tippy
        data={<Item ref={ref} hidden={off} />}
        placement="bottomRight"
        rootClassName="wrapper_account"
        open={show}
        // trigger="click"
        onOpenChange={(e) => (e ? on() : off())}
      >
        <div
          className="px-3 cursor-pointer flex items-center justify-end gap-2 h-full hover:bg-hoverBgLight hover:dark:bg-hoverBg06"
          onClick={on}
        >
          <div className="w-6 h-6 rounded-full overflow-hidden">
            {!(user?.image === '' || user?.image === undefined || user?.image === null) ? (
              <div className="w-6 h-6 border-2 border-solid dark:bg-theme-darkContainer bg-theme-lightContainer dark:border-darkContainer border-lightContainer rounded-full overflow-hidden">
                <Image width={100} src={user?.image} className="object-cover" preview={false} />
              </div>
            ) : (
              <Avatar
                className="border-2 border-solid dark:bg-theme-darkContainer bg-theme-lightContainer dark:border-darkContainer border-lightContainer"
                gap={1}
                size="small"
                icon={<UserOutlined />}
              />
            )}
          </div>
          <span className="text-85 dark:text-white">{user?.name ?? t('Họ tên')}</span>
        </div>
      </Tippy>
    </div>
  );
};

export default Account;

const Item = React.forwardRef(({ hidden }: { hidden: () => void }, ref: any) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(authSelector);
  const [form] = useForm();
  const password = watchedField<IChangePassword>('passwordNew', form);

  const [isChangePassword, { on: onModalChangePassword, off: offModalChangePassword }] =
    useBoolean(false);
  const handleLogout = () => {
    cookieStorageUtil.remove();
    dispatch(authActions.clear());
    queryClient.clear();
    dispatch({ type: 'RESET_APP' });
    return navigate(PATHNAMES.LOGIN);
  };

  const passwordCompare = (value: any) => {
    if (value && value === password) return true;
    return false;
  };
  const mutationChangePassword = useMutation({
    mutationFn: userApi.changePassword,
  });

  const handleChangePassWord = async (values: IChangePassword) => {
    const formValues: IChangePassword = {
      passwordOld: values.passwordOld,
      passwordNew: values.passwordNew,
    };
    if (!user) return;
    mutationChangePassword.mutate(
      { queryKey: [`users/change-password/${user.id}`, formValues] },
      {
        onSuccess: () => {
          message.success('Đổi mật khẩu thành công');
          offModalChangePassword();
          form.resetFields();
        },
        onError: (err: any) => {
          message.error(err?.data?.message);
        },
      },
    );
  };

  return (
    <>
      <div className="text-base font-normal text-85 min-w-[180px] py-1 popup__account" ref={ref}>
        {dataSelelctAccount(handleLogout, onModalChangePassword)?.map(
          (i: IAccountHeader, idx: number) => {
            const Icon = i.icon;
            return (
              <div
                key={idx}
                className={`min-w-[114px] flex items-center justify-start gap-2 cursor-pointer px-3 py-[5px] hover:bg-hoverBgLight transition-all`}
                onClick={() => {
                  i?.path && navigate(i?.path);
                  i?.action && i?.action();
                  hidden();
                }}
              >
                <Icon />
                <div className={`text-85 text-[14px]`}>{t(i?.name)}</div>
              </div>
            );
          },
        )}
      </div>
      <Modal
        title={t('Đổi mật khẩu')}
        open={isChangePassword}
        onOk={form.submit}
        okText="Xác nhận"
        cancelText="Hủy"
        onCancel={() => {
          offModalChangePassword();
          form.resetFields();
        }}
        confirmLoading={mutationChangePassword.isPending}
      >
        <Form
          form={form}
          name="basic"
          style={{ maxWidth: '100%' }}
          layout="vertical"
          onFinish={handleChangePassWord}
          autoComplete="off"
        >
          <Form.Item<IChangePassword>
            name="passwordOld"
            label={t('Mật khẩu cũ')}
            rules={[
              {
                required: true,
                message: t('Mật khẩu cũ không được để trống!'),
              },
            ]}
          >
            <Input.Password
              prefix={<ICKey className="site-form-item-icon" />}
              placeholder={t('Mật khẩu cũ')}
              iconRender={(visible) => (visible ? <ICEye /> : <ICEyeNo />)}
              className="rounded-sm"
            />
          </Form.Item>
          <Form.Item<IChangePassword>
            name="passwordNew"
            label={t('Mật khẩu mới')}
            tooltip={{
              title: <div className="p-2">{t(textPassword)}</div>,
              icon: <ICInfoCircle />,
            }}
            rules={[
              {
                required: true,
                validator: (_, value: any) => {
                  if (!checkNullish(value)) {
                    return Promise.reject(t('Mật khẩu mới không được để trống!'));
                  }
                  if (value?.toString()?.length < 6) {
                    return Promise.reject(t('Mật khẩu mới phải có ít nhất 6 ký tự!'));
                  }
                  if (regexPassword(value)) return Promise.resolve();
                  return Promise.reject(t('Mật khẩu mới không đúng định dạng!'));
                },
              },
            ]}
          >
            <Input.Password
              prefix={<ICKey className="site-form-item-icon" />}
              placeholder={t('Mật khẩu mới')}
              iconRender={(visible) => (visible ? <ICEye /> : <ICEyeNo />)}
              className="rounded-sm"
            />
          </Form.Item>
          <Form.Item<IChangePassword>
            name="rePasswordNew"
            label={t('Nhập lại mật khẩu mới')}
            tooltip={{
              title: <div className="p-2">{t(textPassword)}</div>,
              icon: <ICInfoCircle />,
            }}
            rules={[
              {
                required: true,
                validator: (_, value: any) => {
                  if (!checkNullish(value)) {
                    return Promise.reject(t('Mật khẩu mới không được để trống!'));
                  }
                  if (passwordCompare(value)) return Promise.resolve();
                  return Promise.reject(t('Mật khẩu nhập lại không khớp. Vui lòng nhập lại!'));
                },
              },
            ]}
          >
            <Input.Password
              prefix={<ICKey className="site-form-item-icon" />}
              placeholder={t('Nhập lại mật khẩu mới')}
              className="rounded-sm"
              iconRender={(visible) => (visible ? <ICEye /> : <ICEyeNo />)}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
});
