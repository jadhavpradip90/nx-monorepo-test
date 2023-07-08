import React from 'react';
import { Button, makeStyles, mergeClasses, shorthands } from '@fluentui/react-components';
import { ITemplateRightPanel } from './TemplateRightPanel.interface';
import TemplatePreview from '../template-preview/TemplatePreview';
import TemplateFooter from './footer/TemplateFooter';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  templateViewer: {
    height: '90vh',
  },
});

const TemplateRightPanel:React.FunctionComponent<ITemplateRightPanel> = (props:ITemplateRightPanel) => {
  const { className, templateContent, navigationLeftButtonProps, navigationRightButtonProps, footerPrimaryButtonProps, footerSecondaryButtonProps } = props;
  const classes = useStyles();
  return(
    <div data-testid={'template-right-panel'} className={mergeClasses(classes.container, className)}>
      <TemplatePreview 
        templateContent={templateContent}
        leftButtonProps={navigationLeftButtonProps}
        rightButtonProps={navigationRightButtonProps} 
        templateViewerClassName={mergeClasses(classes.templateViewer, className)} />

      <TemplateFooter 
        primaryButtonProps={footerPrimaryButtonProps} 
        secondaryButtonProps={footerSecondaryButtonProps} />
    </div>
  );
};

export default TemplateRightPanel;
