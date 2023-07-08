import React from 'react';
import type { Decorator } from '@storybook/react';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';

export const withFluentProvider: Decorator = (Story) => <FluentProvider theme={teamsLightTheme}><Story /></FluentProvider>;