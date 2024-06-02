import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

type Props = {};

const SocketCard: FC<Props> = ({}) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  return <></>;
};

export default SocketCard;
