import type { Meta } from '@storybook/react';
import { NavigationButton } from './NavigationButton';

const Story: Meta<typeof NavigationButton> = {
  component: NavigationButton,
  title: 'NavigationButton',
};
export default Story;

export const Primary = {
  args: {},
};
