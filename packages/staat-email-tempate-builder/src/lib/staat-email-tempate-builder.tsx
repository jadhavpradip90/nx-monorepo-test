import styles from './staat-email-tempate-builder.module.less';

/* eslint-disable-next-line */
export interface StaatEmailTempateBuilderProps {}

export function StaatEmailTempateBuilder(props: StaatEmailTempateBuilderProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to StaatEmailTempateBuilder!</h1>
    </div>
  );
}

export default StaatEmailTempateBuilder;
