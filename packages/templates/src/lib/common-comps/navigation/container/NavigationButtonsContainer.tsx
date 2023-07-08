import React from 'react';
import { makeStyles, mergeClasses } from '@fluentui/react-components';
import NavigationButton from '../button/NavigationButton';
import { NavigationButtonDirection } from '../button/NavigationButton.interface';
import { INavigationButtonsContainer } from './NavigationButtonsContainer.interface';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    /*width: '100%', 
    position: 'absolute',
    top: '50%',
    zIndex: '999',*/
  },
});

const NavigationButtonsContainer:React.FunctionComponent<INavigationButtonsContainer> = (props:INavigationButtonsContainer) => {
  const classes = useStyles();
  return(
    <div className={mergeClasses(classes.container, props.className)}>
      <NavigationButton direction={NavigationButtonDirection.Left} onClick={props.onLeftButtonClick} />
      <NavigationButton direction={NavigationButtonDirection.Right} onClick={props.onRightButtonClick} />
    </div>
  );
}

export default NavigationButtonsContainer;
