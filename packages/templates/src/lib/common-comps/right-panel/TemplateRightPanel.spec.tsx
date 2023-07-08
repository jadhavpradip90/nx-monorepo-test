import { render } from '@testing-library/react';

import TemplateRightPanel from './TemplateRightPanel';

describe('RightPanel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TemplateRightPanel />);
    expect(baseElement).toBeTruthy();
  });
});
