import styles from './templates.module.less';

/* eslint-disable-next-line */
export interface TemplatesProps {}

export function Templates(props: TemplatesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Templates!</h1>
    </div>
  );
}

export default Templates;
