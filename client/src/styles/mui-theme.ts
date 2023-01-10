
import { createTheme, hexToRgb } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import shadows from '@mui/material/styles/shadows';

export const addOpacity = (colour: string, opacity: number) => hexToRgb(colour).replace(')', `, ${opacity})`);

const palette = {
    primary: {
        main: '#FF5722',
        light: '#FFAB91',
        dark: '#FF8159',
        contrastText: '#FFF'
    },
    secondary: {
        main: blueGrey[900],
        light: '#4f5b62',
        dark: '#000a12',
        contrastText: '#ffffff'
    },
    background: {
        default: '#fafbfc',
        dark: 'rgb(38, 50, 56)',
        transparent: 'rgba(194, 224, 255, 0.08)',
        border: 'rgba(194, 224, 255, 0.08);'
    },
    text: {
        primary: '#5C5C5C',
        secondary: '#8C8C8C'
    },
    action: {
        disabled: '#DDDD'
    },
    common: {
        white: '#FFF'
    },
    custom: {
        divider: 'rgb(0, 0, 0, 0.12)'
    },
    divider: 'rgba(0, 0, 0, 0.1)'
};

shadows[1] = `0px 0px 2px 1px ${addOpacity(blueGrey[900], 0.2)}`

export const MuiTheme = createTheme({

    palette,
    typography: {
        fontSize: 14,
        htmlFontSize: 16,
        fontFamily: 'Ubuntu, Railway, Helvetica Neue',
        body1: {
            fontWeight: 'normal'
        },
        h6: {
            fontWeight: 'normal',
            fontSize: 18
        }
    },
    components: {
        MuiTextField: {
            defaultProps: {
                variant: 'standard'
            }
        },
        MuiButton: {
            styleOverrides: {
                containedPrimary: {
                    '&.Mui-disabled': {
                        color: palette.text.secondary
                    }
                }
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    fontSize: 20
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                paddingCheckbox: {
                    padding: '0 12px'
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: palette.text.primary
                }
            }
        }
    }
});
