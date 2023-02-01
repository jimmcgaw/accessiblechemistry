import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PeriodicTableRow from './PeriodicTableRow';

describe('<PeriodicTableRow />', () => {
  test('it should mount', () => {
    render(<PeriodicTableRow elementNumbers={[0,0,0,0,0,0]} />);
    
    const periodicTableRow = screen.getByTestId('PeriodicTableRow');

    expect(periodicTableRow).toBeInTheDocument();
  });
});