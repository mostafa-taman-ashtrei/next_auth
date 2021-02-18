import React from 'react';
import { Spinner } from '@chakra-ui/react';

import styles from '../styles/Home.module.css';

const Loading: React.FC = () => (
    <div className={styles.main}>
        <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            justifyContent="center"
        />
    </div>
);

export default Loading;
