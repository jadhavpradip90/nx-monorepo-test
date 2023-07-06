import { render } from '@testing-library/react';

import StaatEmailTempateBuilder from './staat-email-tempate-builder';

describe('StaatEmailTempateBuilder', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StaatEmailTempateBuilder />);
    expect(baseElement).toBeTruthy();
  });
});
