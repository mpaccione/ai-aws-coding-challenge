import React from 'react';
import { Box, Button } from '@mui/material';

import { instructions } from './constants';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Section = ({ content, idx, title }) => (
  <div
    key={idx}
    style={{
      backgroundColor: `${idx % 2 ? 'darkgray' : 'black'}`,
      margin: '5px',
    }}
  >
    <h4>{title}</h4>
    <p>{content}</p>
  </div>
);

const Home = () => { return (
  <div className={styles.container}>
    <Head>
      <title>AI-AWS-Coding-Test</title>
      <meta name='description' content='AI-AWS-Coding-Test' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Box>
      <h2>
        Here is a technical exam: Objective: Build an app that tracks users'
        fitness and nutrition data.
      </h2>
      <p>
        The app should leverage AI to provide workout recommendations and
        suggest healthy meal plans.
      </p>

      <h3>Technologies:</h3>
      {instructions.map(({ content, title }, idx) => (
        <Section {...{ content, idx, title }} />
      ))}
    </Box>
    <Box style={{ display: 'flex', justifyContent: 'center' }}>
      <Button variant='contained'>View Application</Button>
    </Box>
    <br />
    <footer className={styles.footer}>
      <a
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        Powered by Michael Paccione and Work Ethic
      </a>
    </footer>
  </div>
)};

export default Home;
