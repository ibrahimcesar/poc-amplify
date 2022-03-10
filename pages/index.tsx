import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsconfig from '../src/aws-exports';

Amplify.configure(awsconfig);


const Home: NextPage = ({ signOut, user }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>iStd Modern Application</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem-vindo ao iStd Modern Application
        </h1>
        <h2>Olá {user.signInUserSession.idToken.payload.email}</h2>
      <button onClick={signOut}>Sign out</button>
      </main>
      </div>
  )
}

export default withAuthenticator(Home);
