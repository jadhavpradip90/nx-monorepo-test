import React from 'react';
import { makeStyles, mergeClasses, GriffelStyle, shorthands } from '@fluentui/react-components';
import { ITemplatePreview } from './TemplatePreview.interface';
import TemplateViewer from '../template-viewer/TemplateViewer';
import NavigationButton, { navigationButtonStyle } from '../navigation/button/NavigationButton';
import { NavigationButtonDirection } from '../navigation/button/NavigationButton.interface';

const navigationButtonLeftStyles:GriffelStyle = {
  ...navigationButtonStyle,
  position: 'absolute',
};

const navigationButtonRightStyles:GriffelStyle = {
  ...navigationButtonStyle,
  position: 'absolute',
  right: '16px',
};

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  templateViewer: {
    ...shorthands.border('2px', 'solid', '#666666'),
  },
  navigationButtonLeft: navigationButtonLeftStyles,
  navigationButtonRight: navigationButtonRightStyles,
});

const TemplatePreview:React.FunctionComponent<ITemplatePreview> = (props:ITemplatePreview) => {
  const { className, templateContent, leftButtonProps, rightButtonProps, templateViewerClassName } = props;
  const classes = useStyles();
  return (
    <div className={mergeClasses(classes.container, className)} data-testid='template-preview'>
      <NavigationButton
        {...leftButtonProps} 
        direction={NavigationButtonDirection.Left} 
        className={mergeClasses(classes.navigationButtonLeft, leftButtonProps?.className)} />

      <TemplateViewer 
        templateContent={templateContent} 
        className={mergeClasses(classes.templateViewer, templateViewerClassName)} />

      <NavigationButton
        {...rightButtonProps} 
        direction={NavigationButtonDirection.Right} 
        className={mergeClasses(classes.navigationButtonRight, rightButtonProps?.className)}  />
    </div>
  );
};

export default TemplatePreview;
