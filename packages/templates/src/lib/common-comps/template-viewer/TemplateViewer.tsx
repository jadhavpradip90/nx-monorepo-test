import React from 'react';
import { makeStyles, mergeClasses, shorthands } from '@fluentui/react-components';
import { ITemplateViewer } from './TemplateViewer.interface';

const useStyles = makeStyles({
  container: { 
    height: '96vh',
    ...shorthands.overflow('auto'),
  },
});

const TemplateViewer:React.FunctionComponent<ITemplateViewer> = (props:ITemplateViewer) => {
  const classes = useStyles();
  return (
    <div 
      data-testid='template-viewer'
      className={mergeClasses(classes.container, props.className)}
      dangerouslySetInnerHTML={{__html: props.templateContent}} 
    />
  );
};

export default TemplateViewer;
