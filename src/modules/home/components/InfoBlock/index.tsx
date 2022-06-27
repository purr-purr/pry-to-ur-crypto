import { FC } from 'react';
import cn from 'classnames';

import CryptoTable from '@modules/home/components/CryptoTable';

import s from './InfoBlock.module.scss';

const InfoBlock: FC<{
  className?: string;
  title: string;
}> = ({ className, title }) => {
  return (
    <div className={cn(s.container, className)}>
      <h2>{title}</h2>
      <CryptoTable />
    </div>
  );
};

// InfoBlock.defaultProps = {
//   className: undefined,
// };

export default InfoBlock;
