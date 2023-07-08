import type { Meta } from '@storybook/react';
import NavigationButton from './NavigationButton';
import { withFluentProvider } from '../../../../../.storybook/decorators';
import { NavigationButtonDirection } from './NavigationButton.interface';

const Story: Meta<typeof NavigationButton> = {
  component: NavigationButton,
  title: 'NavigationButton',
  argTypes: { onClick: { action: 'clicked' } },
};
export default Story;

export const NavigationLeft = {
  args: {
    direction: NavigationButtonDirection.Left,
  },
  decorators: [withFluentProvider],
};

export const NavigationRight = {
  args: {
    direction: NavigationButtonDirection.Right,
  },
  decorators: [withFluentProvider],
};
