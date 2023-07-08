import type { Meta } from '@storybook/react';
import TemplateFooter from './TemplateFooter';
import { withFluentProvider } from '../../../../../.storybook/decorators';

const Story: Meta<typeof TemplateFooter> = {
  component: TemplateFooter,
  title: 'TemplateFooter',
};
export default Story;

export const Footer = {
  args: {},
  decorators: [withFluentProvider],
};
