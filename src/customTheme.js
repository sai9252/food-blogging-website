import { theme as chakraTheme } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

// declare a variable for fonts and set our fonts. I am using Inter with various backups but you can use `Times New Roman`. Note we can set different fonts for the body and heading.
const fonts = {
  ...chakraTheme.fonts,
  textStyles: {
    head: {
      fontFamily: 'Source Sans Pro',
      fontWeight:'700'
    },
    subhead: {
      fontFamily: 'Poppins',
    },
    para: {
      fontFamily: 'Open Sans',
    },
  },
  
};

// declare a variable for our theme and pass our overrides in the e`xtendTheme` method from chakra
const customTheme = extendTheme(fonts);

// export our theme
export default customTheme;
