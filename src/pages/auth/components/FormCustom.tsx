import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import './index.css';

type Props = {
  children?: any;
  name?: string;
  pathBack?: string;
};

const FormCustom = (props: Props) => {
  const { children, name, pathBack } = props;
  let navigate = useNavigate();
  const { t } = useTranslation();

  const handleBack = () => {
    navigate(pathBack ?? '');
  };

  return <div className="wrapper_form relative h-screen w-full"></div>;
};

export default FormCustom;
