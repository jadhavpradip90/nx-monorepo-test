import React from 'react';
import { Button, makeStyles, mergeClasses, GriffelStyle } from '@fluentui/react-components';
import { ChevronLeft48Filled, ChevronRight48Filled, FluentIconsProps } from '@fluentui/react-icons';
import { INavigationButton, NavigationButtonDirection } from './NavigationButton.interface';

export const navigationButtonStyle:GriffelStyle = {
  backgroundColor: '#9B9B9B',
  height: '48px',
  width: '24px',
  opacity: '0.25',
  ':hover': {
    backgroundColor: '#666666',
    opacity: '1',
  },
};

const useStyles = makeStyles({
  button: navigationButtonStyle
});

const getButtonIcon = (direction: NavigationButtonDirection) => {
  const iconStyles:FluentIconsProps = {
    primaryFill: '#FFFFFF',
  };
  
  if (direction === NavigationButtonDirection.Left) {
    return <ChevronLeft48Filled {...iconStyles} />;
  }
  return <ChevronRight48Filled {...iconStyles} />
};

const NavigationButton:React.FunctionComponent<INavigationButton> = (props:INavigationButton) => {
  const classes = useStyles();
  console.log(mergeClasses(classes.button, props.className));
  return (
    <Button
      data-testid={'btn-navigation-'+props.direction}
      className={mergeClasses(classes.button, props.className)}
      icon={getButtonIcon(props.direction)} 
      {...props}
    />
  );
};

export default NavigationButton;
