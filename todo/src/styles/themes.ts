import { Theme } from "../models/theme";

const light: Theme = {
    name: 'light',
    colors: {
        backgroundPrimary: '#4682b4',
        backgroundSecondary: '#edf0f1'
    }
}

const dark: Theme = {
    name: 'dark',
    colors: {
        backgroundPrimary: 'black',
        backgroundSecondary: 'gray'
    }
}

export const themes = { light, dark }
