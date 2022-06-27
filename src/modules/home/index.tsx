import React, { useEffect } from 'react';

import InfoBlock from '@modules/home/components/InfoBlock';

import s from './Home.module.scss';

const HomePage = () => {
  useEffect(() => {
    document.title = `Home Page`;
  }, []);

  return (
    <article className={s.container}>
      <h1>Home Page</h1>
      <InfoBlock title="Crypto Table" />
    </article>
  );
};

export default HomePage;
