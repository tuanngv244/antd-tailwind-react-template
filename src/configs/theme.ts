import { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  components: {
    Button: {
      borderRadius: 2,
      defaultBg: 'primary',
    },
    Input: {
      borderRadius: 2,
    },
    Steps: {
      dotCurrentSize: 24,
      finishIconBorderColor: 'primary',
    },
    Timeline: {},
    Pagination: {},
    Select: {
      borderRadius: 2,
    },
    Radio: {},
    Dropdown: {
      borderRadius: 2,
    },
    Switch: {
      colorTextQuaternary: 'rgba(0, 0, 0, 0.25)',
    },
  },
  token: {
    fontFamily: 'SF-Regular',
  },
};

export default theme;
