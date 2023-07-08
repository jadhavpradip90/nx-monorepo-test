import { render } from '@testing-library/react';

import TemplatePreview from './TemplatePreview';

describe('TemplatePreview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TemplatePreview />);
    expect(baseElement).toBeTruthy();
  });
});
