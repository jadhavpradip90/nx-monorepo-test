import { render, screen, fireEvent } from '@testing-library/react';
import NavigationButton from './NavigationButton';
import { INavigationButton, NavigationButtonDirection } from './NavigationButton.interface';

const componentProps: INavigationButton = {
  direction: NavigationButtonDirection.Left,
  onClick: (event) => console.log('Button Clicked'),
};

describe('NavigationButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationButton {...componentProps} />);
    expect(baseElement).toBeTruthy();
  });

  it('should display correct background color', () => {
    const buttonBgColor = 'rgb(102, 102, 102)';
    render(<NavigationButton {...componentProps} />);
    const button = screen.getByRole('button');
    const buttonStyles = window.getComputedStyle(button);
    expect(buttonStyles.backgroundColor).toEqual(buttonBgColor);
  });

  it('should dispatch onClick event', () => {
    const handleOnClick = jest.fn();
    const overriddenProps = {...componentProps, onClick: handleOnClick};
    render(<NavigationButton {...overriddenProps} />);
    const button = screen.getByRole('button');
    fireEvent.click(button)
    expect(handleOnClick).toHaveBeenCalledTimes(1);
  });
});
