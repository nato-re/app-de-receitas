import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from '../../App';


const VALID_EMAIL = 'addd@hotmi.com';
const VALID_PASSWORD = 'naoeumasenhaconfiavel';

const INVALID_EMAIL = 'ssd@hotmi.om';
const INVALID_PASSWORD = 'trust';

describe('Testing login inputs and button', () => {
  test('emaill, password: validInput - button should be able', () => {
    const { getByTestId } = render(<App />);
    const loginInput = getByTestId('email-input');

    expect(loginInput).toBeInTheDocument();

    fireEvent.change(loginInput, { target: { value: VALID_EMAIL } });
    expect(loginInput.value).toBe(VALID_EMAIL);

    const passwordInput = getByTestId('password-input');
    expect(loginInput).toBeInTheDocument();

    fireEvent.change(passwordInput, { target: { value: VALID_PASSWORD } });

    expect(passwordInput.value).toBe(VALID_PASSWORD);
    const loginButton = getByTestId('login-submit-btn');
    expect(loginButton.disabled).toBe(false);
    fireEvent.click(loginButton);
    expect(localStorage.getItem('mealsToken')).toBe('1');
    expect(localStorage.getItem('cocktailsToken')).toBe('1');
    expect(JSON.parse(localStorage.getItem('user'))).toEqual({ email: VALID_EMAIL });
    expect(window.location.pathname).toMatch('/comidas');
  });

  test('email, password: INvalidInput - button should be DISabled', () => {
    const { getByTestId } = render(<App />);
    const loginInput = getByTestId('email-input');

    expect(loginInput).toBeInTheDocument();

    fireEvent.change(loginInput, { target: { value: INVALID_EMAIL } });

    expect(loginInput.value).toBe(INVALID_EMAIL);

    const passwordInput = getByTestId('password-input');
    expect(loginInput).toBeInTheDocument();

    fireEvent.change(passwordInput, { target: { value: INVALID_PASSWORD } });

    expect(passwordInput.value).toBe(INVALID_PASSWORD);
    const loginButton = getByTestId('login-submit-btn');
    expect(loginButton.disabled).toBe(true);
  });
});
