import { ICMoon, ICSunny } from '@/assets/icons';
import useDarkMode from '@/hooks/common/useDarkMode';
import { sidebarActions } from '@/store/modules/sidebar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Theme = () => {
  const { theme, toggleTheme } = useDarkMode();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sidebarActions.setTheme({ theme }));
  }, [theme]);

  return (
    <div className="flex items-center justify-center h-full px-1 hover:bg-hoverBgLight hover:dark:bg-hoverBg06">
      <div className="p-2 rounded-full cursor-pointer icon-theme" onClick={toggleTheme}>
        {theme === 'dark' ? <ICSunny /> : <ICMoon />}
      </div>
    </div>
  );
};

export default Theme;
