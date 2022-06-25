import React, { useEffect } from 'react';
import CryptoTable from '@modules/home/components/CryptoTable';

import s from './Home.module.scss';

const HomePage = () => {
  useEffect(() => {
    document.title = `Home Page`;
  }, []);

  return (
    <article className={s.container}>
      <h1>Home Page</h1>
      <CryptoTable />
    </article>
  );
};

export default HomePage;
