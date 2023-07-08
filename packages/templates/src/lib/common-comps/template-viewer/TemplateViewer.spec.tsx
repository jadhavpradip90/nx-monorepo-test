import { render } from '@testing-library/react';

import TemplateViewer from './TemplateViewer';

describe('TemplateViewer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TemplateViewer />);
    expect(baseElement).toBeTruthy();
  });
});
