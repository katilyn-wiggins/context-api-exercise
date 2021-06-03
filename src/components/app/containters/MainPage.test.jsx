/** 
* @jest-environment jsdom
*/

import React from 'react'; 
import { screen, render } from '@testing-library/react';
import MainPage from './MainPage'; 

describe('MainPage container testing', () => {
  it('should render a list of hey arnold characters', async () => {
    render(<MainPage />);

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'character-list' });
    expect(ul).toMatchSnapshot(); 


  });
});
