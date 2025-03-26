'use client';

import { StoreProvider } from '@/providers/store';
import { MUIThemeProvider } from '@/providers/theme';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { FC, PropsWithChildren } from 'react';
import { SnackbarProvider } from 'notistack';

const clientSideEmotionCache = createCache({ key: 'css', prepend: true });

export const Providers: FC<PropsWithChildren> = ({ children }) => {
	return (
		<CacheProvider value={clientSideEmotionCache}>
			<StoreProvider>
				<MUIThemeProvider>
					<SnackbarProvider
						maxSnack={3}
						autoHideDuration={3000}
						anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
					>
						<CssBaseline />
						{children}
					</SnackbarProvider>
				</MUIThemeProvider>
			</StoreProvider>
		</CacheProvider>
	);
};
