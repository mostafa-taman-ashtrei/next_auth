import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';
import { ChakraProvider } from '@chakra-ui/react';

import '../styles/globals.css';
import Navbar from '../components/Navbar';

const MyApp: React.FC<AppProps> = (
    { Component, pageProps }: AppProps,
) => (
    <Provider session={pageProps.session}>
        <ChakraProvider>
            <Navbar />
            <Component {...pageProps} />
        </ChakraProvider>
    </Provider>
);

export default MyApp;
