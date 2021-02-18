import React from 'react';
import Head from 'next/head';
import {
    signIn, signOut, useSession,
} from 'next-auth/client';
import { CheckIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import {
    Button, Avatar, Grid, GridItem, Image,
} from '@chakra-ui/react';

import styles from '../styles/Home.module.css';
import Loading from '../components/Loading';

const Home: React.FC = () => {
    const [session, loading] = useSession();

    if (loading) return <Loading />;

    return (
        <div className={styles.container}>
            <Head>
                <title>Next Auth Demo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <>
                    {
                        session && session.user
                            ? (
                                <Grid
                                    h="200px"
                                    border="1px"
                                    borderColor="green.400"
                                    borderRadius="2xl"
                                    p="3"
                                    templateRows="repeat(2, 1fr)"
                                    templateColumns="repeat(5, 1fr)"
                                    gap={4}
                                >
                                    <GridItem rowSpan={2} colSpan={1}>
                                        <Avatar size="2xl" name={session?.user.name} src={session?.user.image} />

                                    </GridItem>
                                    <GridItem colSpan={2}>{session?.user.name}</GridItem>
                                    <GridItem colSpan={2}>{session?.user.email ? session.user.name : 'Email was not provided'}</GridItem>
                                    <GridItem colSpan={4}>
                                        <Button
                                            rightIcon={<ArrowForwardIcon />}
                                            colorScheme="teal"
                                            variant="outline"
                                            onClick={() => signOut()}
                                        >
                                            Log Out
                                        </Button>
                                    </GridItem>
                                </Grid>
                            )
                            : (
                                <Button
                                    leftIcon={(
                                        <Image
                                            boxSize="30px"
                                            objectFit="cover"
                                            src="./github-logo.png"
                                            alt="github logo"
                                        />
                                    )}
                                    rightIcon={<CheckIcon />}
                                    colorScheme="whatsapp"
                                    variant="solid"
                                    onClick={() => signIn('github')}
                                >
                                    Github Login
                                </Button>
                            )
                    }
                </>
            </main>
        </div>
    );
};

export default Home;
