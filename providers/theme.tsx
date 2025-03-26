'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { FC } from 'react';

const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#1976d2',
		},
		secondary: {
			main: '#dc004e',
		},
		background: {
			default: '#f5f5f5',
			paper: '#ffffff',
		},
		text: {
			primary: '#000000',
			secondary: '#555555',
		},
	},
	typography: {
		fontFamily: 'Poppins, sans-serif',
		h1: {
			fontSize: '3rem',
			fontWeight: 700,
			marginBottom: '1rem',
		},
		h2: {
			fontSize: '2.5rem',
			fontWeight: 700,
			marginBottom: '0.75rem',
		},
		h3: {
			fontSize: '2rem',
			fontWeight: 700,
			marginBottom: '0.75rem',
		},
		body1: {
			fontSize: '1rem',
			lineHeight: 1.6,
		},
	},
	spacing: 8,
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundColor: '#f5f5f5',
					color: '#000000',
				},
			},
		},
	},
});

export const MUIThemeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<ThemeProvider theme={lightTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};
