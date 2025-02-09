import { alpha, createTheme, PaletteOptions, Theme } from '@mui/material';
import { RaThemeOptions } from './types';

const componentsOverrides = (theme: Theme) => {
    const shadows = [
        alpha(theme.palette.primary.main, 0.2),
        alpha(theme.palette.primary.main, 0.1),
        alpha(theme.palette.primary.main, 0.05),
    ];
    return {
        MuiAppBar: {
            styleOverrides: {
                colorSecondary: {
                    backgroundColor: '#ffffff',
                    color: theme.palette.text.primary,
                },
            },
        },
        MuiAutocomplete: {
            defaultProps: {
                fullWidth: true,
            },
        },
        MuiButton: {
            defaultProps: {
                variant: 'outlined' as const,
            },
            styleOverrides: {
                sizeSmall: {
                    padding: `${theme.spacing(0.5)} ${theme.spacing(1.5)}`,
                },
            },
        },
        MuiFormControl: {
            defaultProps: {
                variant: 'outlined' as const,
                margin: 'dense' as const,
                size: 'small' as const,
                fullWidth: true,
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundClip: 'padding-box',
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(1.5),
                    '&.MuiTableCell-sizeSmall': {
                        padding: theme.spacing(1),
                    },
                    '&.MuiTableCell-paddingNone': {
                        padding: 0,
                    },
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    '&:last-child td': { border: 0 },
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                variant: 'outlined' as const,
                margin: 'dense' as const,
                size: 'small' as const,
                fullWidth: true,
            },
        },
        RaDatagrid: {
            styleOverrides: {
                root: {
                    '& .RaDatagrid-headerCell': {
                        fontWeight: 700,
                    },
                },
            },
        },
        RaFilterForm: {
            styleOverrides: {
                root: {
                    [theme.breakpoints.up('sm')]: {
                        minHeight: theme.spacing(6),
                    },
                },
            },
        },
        RaSidebar: {
            styleOverrides: {
                root: {
                    "& .RaSidebar-fixed": {
                        backgroundColor: "#3C4050",
                    },
                },
            },
        },
        RaLayout: {
            styleOverrides: {
                root: {
                    '& .RaLayout-appFrame': { marginTop: theme.spacing(5) },
                },
            },
        },
        RaMenuItemLink: {
            styleOverrides: {
                root: {
                    borderLeft: `3px solid ${theme.palette.primary.main}`,
                    '&:hover': {
                        background: `#292D3D`,
                    },
                    '&.RaMenuItemLink-active': {
                        borderLeft: `3px solid #D98F47`,
                        //borderLeft: `3px solid ${theme.palette.primary.main}`,
                        background: `#303446`,
                        //boxShadow: theme.shadows[1],
                        color: theme.palette.primary.contrastText,

                        '& .MuiSvgIcon-root': {
                            fill: theme.palette.primary.contrastText,
                        },
                    },
                    '& .RaMenuItemLink-icon': {
                        color: `#88868C`,
                    },
                },
            },
        },
        RaSimpleFormIterator: {
            defaultProps: {
                fullWidth: true,
            },
        },
        RaTranslatableInputs: {
            defaultProps: {
                fullWidth: true,
            },
        },
    };
};

const alert = {
    error: { main: '#DB488B' },
    warning: { main: '#F2E963' },
    info: { main: '#3ED0EB' },
    success: { main: '#0FBF9F' },
};

const darkPalette: PaletteOptions = {
    primary: { main: '#303446' },
    secondary: { main: '#FF83F6' },
    background: { default: '#3C4050', paper: '#151221' },
    ...alert,
    mode: 'dark' as 'dark',
};

const lightPalette: PaletteOptions = {
    primary: { main: '#544f5a' },
    secondary: { main: '#C4DCF3' },
    background: { default: '#f0f1f6' },
    text: {
        primary: '#544f5a',
        secondary: '#89868D',
    },
    ...alert,
    mode: 'light' as 'light',
};

const createCustomTheme = (palette: RaThemeOptions['palette']) => {
    const themeOptions = {
        palette,
        shape: { borderRadius: 6 },
        sidebar: { width: 250 },
        spacing: 10,
        typography: {
            h1: {
                fontWeight: 500,
                fontSize: '6rem',
            },
            h2: { fontWeight: 600 },
            h3: { fontWeight: 700 },
            h4: { fontWeight: 800 },
            h5: { fontWeight: 900 },
            button: { textTransform: undefined, fontWeight: 700 },
        },
    };
    const theme = createTheme(themeOptions);
    theme.components = componentsOverrides(theme);
    return theme;
};

export const customLightTheme = createCustomTheme(lightPalette);
export const customDarkTheme = createCustomTheme(darkPalette);
