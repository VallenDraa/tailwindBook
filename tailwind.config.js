module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      keyframes: {
        'grow-fade-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(40%)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(100%)',
          },
        },
        'shrink-fade-out': {
          '0%': {
            opacity: '1',
            transform: 'scale(100%)',
          },
          '100%': {
            opacity: '0',
            transform: 'scale(40%)',
          },
        },
      },
      animation: {
        'grow-fade-in': 'grow-fade-in 0.3s ease-in',
        'shrink-fade-out': 'shrink-fade-out 0.3s cubic-bezier(1,.01,.72,1.02)',
      },
      boxShadow: {
        soft: '0px 15px 30px rgba(0, 186, 199, 0.33)',
        light: '0px 30px 60px rgba(74, 114, 255, 0.25)',
      },
      colors: {
        dark: '#272D3E',
        'dark-muted': 'rgba(39, 45, 62, 0.8);',
        'dark-muted/80': 'rgba(39, 45, 62, 0.64);',
        primary: '#00BAC7',
        'light-primary': '#EDFCFD',
        'lighter-primary': '#C6F4F8',
        'light-gray': '#E5E5E5',
        'dim-gray': '#F4F7FF',
        'dark-gray': '#374151',
      },
      fontFamily: {
        DM: ['DM Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        source: ['Source Sans Pro', 'sans-serif'],
      },
      backgroundImage: { header: "url('./public/img/header.svg')" },
    },
  },
  plugins: [],
};
