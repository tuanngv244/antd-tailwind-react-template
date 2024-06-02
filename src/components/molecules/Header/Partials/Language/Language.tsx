import { IChangeLanguage, IVIWORK_LANGUAGE_KEY, dataLanguage } from '@/models/sidebar';
import { localStorageUtil } from '@/services/storage';
import i18next from 'i18next';
import { useEffect, useState } from 'react';
import Tippy from '../../../../atoms/Tippy/Tippy';

const Language = () => {
  const [select, setSelect] = useState<IChangeLanguage | undefined>(dataLanguage[0]);
  const Icon = select?.icon;

  useEffect(() => {
    const language = localStorageUtil.get(IVIWORK_LANGUAGE_KEY) ?? 'vi';
    const dataNew = dataLanguage.find((i: IChangeLanguage) => i?.value === language?.toString());
    setSelect(dataNew);
  }, []);

  const handleChangeLanguage = (data: IChangeLanguage) => {
    localStorageUtil.set(data?.value, IVIWORK_LANGUAGE_KEY);
    i18next.changeLanguage(data?.value);
    setSelect(data);
  };

  return (
    <Tippy
      data={<Item onClick={handleChangeLanguage} select={select} />}
      placement="bottomLeft"
      rootClassName="wrapper_language"
    >
      <div className=" flex items-center justify-center h-full px-1 hover:bg-hoverBgLight hover:dark:bg-hoverBg06">
        <div className="p-2 rounded-full cursor-pointer ">
          <Icon />
        </div>
      </div>
    </Tippy>
  );
};

export default Language;

const Item = ({
  onClick,
  select,
}: {
  onClick: (data: IChangeLanguage) => void;
  select?: IChangeLanguage;
}) => {
  return (
    <div className="py-[4px]">
      {dataLanguage?.map((d: IChangeLanguage, idx: number) => {
        const Icon = d?.icon;
        return (
          <div
            key={idx}
            className={`min-w-[114px] flex items-center justify-start gap-[8px] cursor-pointer px-3 py-[5px] hover:bg-hoverLight ${
              select?.value === d?.value ? 'bg-hoverLight' : ''
            }`}
            onClick={() => onClick(d)}
          >
            <Icon />
            <div
              className={`text-85 text-sm ${
                select?.value === d?.value ? 'font-medium' : 'font-normal'
              }`}
            >
              {d?.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};
