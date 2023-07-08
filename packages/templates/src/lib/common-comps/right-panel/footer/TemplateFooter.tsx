import React from 'react';
import { Button, makeStyles, mergeClasses, shorthands } from '@fluentui/react-components';
import { ITemplateFooter } from './TemplateFooter.interface';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    ...shorthands.padding('8px', '0px'),
  },
  btnPrimary: {
    ...shorthands.margin('0px', '8px', '0px', '0px'),
    backgroundColor: '#0078D4',
    ':hover': {
      backgroundColor: '#0078D4',
    },
  },
  btnSecondary: {
    backgroundColor: '#F4F4F4',
    ':hover': {
      backgroundColor: '#F4F4F4',
    },
  }
});

const TemplateFooter:React.FunctionComponent<ITemplateFooter> = (props:ITemplateFooter) => {
  const { className, primaryButtonProps, secondaryButtonProps } = props;
  const classes = useStyles();
  return (
    <div data-testid={'template-footer'} className={mergeClasses(classes.container, className)}>
      <Button
        {...primaryButtonProps} 
        appearance="primary" 
        className={mergeClasses(classes.btnPrimary, primaryButtonProps?.className)}>
          Insert Content
      </Button>

      <Button 
        {...secondaryButtonProps} 
        className={mergeClasses(classes.btnSecondary, secondaryButtonProps?.className)}>
          Cancel
      </Button>
    </div>
  );
}

export default TemplateFooter;
