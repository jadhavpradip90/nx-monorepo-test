import styles from './NavigationButton.module.less';

/* eslint-disable-next-line */
export interface NavigationButtonProps {}

export function NavigationButton(props: NavigationButtonProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to NavigationButton!</h1>
    </div>
  );
}

export default NavigationButton;
