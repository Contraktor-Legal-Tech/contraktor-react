export default {
  sidebarWidth: '25rem',

  primaryColor: '#03a9f4',
  infoColor: '#e5f2fa',
  errorColor: '#e42822',
  errorSecondaryColor: '#fce9e8',
  alertColor: '#ffc217',
  alertSecondaryColor: '#fff8e7',
  successColor: '#00cb00',
  successSecondaryColor: '#e5f9e5',
  pendingColor: '#fd9828',

  backgroundColor: '#ffffff',
  secondaryBackgroundColor: '#fafafb',
  editorBackgroundColor: '#e0e6ed',

  headerFont: '\'Fakt Soft Pro\', \'Helvetica Neue\', Arial, Helvetica, sans-serif',
  pageFont: '\'Fakt Soft Pro\', \'Helvetica Neue\', Arial, Helvetica, sans-serif',
  buttonFont: '\'Fakt Soft Pro\', \'Helvetica Neue\', Arial, Helvetica, sans-serif',

  fontSize: '16px',
  lineHeight: '1.3em',
  fontColor: '#333333', // black

  smallFontSize: '0.875em',
  xSmallFontSize: '0.75em',

  headerLineHeight: '1.2857em',

  textColor: '#777777',
  headerColor: '#262626',
  mutedTextColor: '#B5B5B5',
  mutedTextColorHover: '#777777',
  labelBackgroundColoe: '#e8e8e8',
  lightGrey: '#FBFCFD',
  strongColor: '#8a8a8a',

  defaultAvatarBackground: '#767676',
  defaultAvatarColor: '#C2C2C2',
  avatarColors: [
    '#DB2828',
    '#F2711C',
    '#FBBD08',
    '#B5CC18',
    '#21BA45',
    '#00B5AD',
    '#2185D0',
    '#6435C9',
    '#A333C8',
    '#E03997',
    '#A5673F'
  ],
  avatarSizes: {
    'x-small': '1rem',
    small: '1.625rem',
    medium: '2.2rem',
    large: '2.875rem',
    'x-large': '3.750rem'
  },

  iconColor: '#C2C2C2',

  linkColor: '#1397F1',
  linkColorHover: '#4cc7ff',

  tabColor: '#B5B5B5',
  tabColorHover: '#4cc7ff',
  tabColorActive: '#03a9f4',

  tooltipBackgrounColor: '#E0E6ED',
  separatorBorderColor: '#E0E6ED',

  fadedIconColor: '#d2d5d9',
  checkedGreenColor: '#00CB00',

  errorHeaderColor: '#E0E6ED',
  errorTextColor: '#c2c2c2',

  primaryButton: {
    background: '#03a9f4',
    color: '#ffffff',
    border: '#03a9f4',
    hover: {
      background: '#2bb5ff',
      color: '#ffffff',
      border: '#2bb5ff'
    },
    active: {
      background: '#149ad6',
      color: '#ffffff',
      border: '#149ad6'
    },
    disabled: {
      background: '#d2d5d9',
      color: '#ffffff',
      border: '#d2d5d9'
    }
  },

  secondaryButton: {
    background: 'transparent',
    color: '#03a9f4',
    border: '#03a9f4',
    hover: {
      background: '#2bb5ff',
      color: '#ffffff',
      border: '#2bb5ff'
    },
    active: {
      background: '#149ad6',
      color: '#ffffff',
      border: '#149ad6'
    },
    disabled: {
      background: '#fafafb',
      color: '#c2c2c2',
      border: '#c2c2c2'
    }
  },

  flexboxgrid: {
    gridSize: 12,
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 38, // rem
      md: 50, // rem
      lg: 58 // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 42.6, // em (~768px)
      md: 56.8, // em (~1024px)
      lg: 66.6 // em (~1200px)
    }
  }
};
