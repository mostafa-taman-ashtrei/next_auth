import React from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import '../styles/globals.css';
import Navbar from '../components/Navbar';

const MyApp: React.FC<AppProps> = (
    { Component, pageProps }: AppProps,
) => (
    <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
    </ChakraProvider>
);

export default MyApp;
