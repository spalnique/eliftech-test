import { DNA } from 'react-loader-spinner';

import type { FC } from 'react';

import css from './Loader.module.css';

const Loader: FC = () => {
  return (
    <div className={css.loaderBackdrop}>
      <div className={css.loaderWrapper}>
        <DNA
          visible={true}
          height='80px'
          width='80px'
          ariaLabel='dna-loading'
          wrapperClass='dna-wrapper'
        />
      </div>
    </div>
  );
};

export default Loader;
