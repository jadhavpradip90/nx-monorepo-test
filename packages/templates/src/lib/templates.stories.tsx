import type { Meta } from '@storybook/react';
import { Templates } from './templates';

const Story: Meta<typeof Templates> = {
  component: Templates,
  title: 'Templates',
};
export default Story;

export const Primary = {
  args: {},
};
