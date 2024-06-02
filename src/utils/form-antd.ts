import { Form, FormInstance } from 'antd';

const watchedField = <T extends object = any>(field: keyof T, form: FormInstance<T>): any => {
  return Form.useWatch(field as keyof T, { form, preserve: true });
};

export { watchedField };
