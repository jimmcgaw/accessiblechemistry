import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PeriodicTable from './PeriodicTable';

describe('<PeriodicTable />', () => {
  test('it should mount', () => {
    render(<PeriodicTable />);
    
    const periodicTable = screen.getByTestId('PeriodicTable');

    expect(periodicTable).toBeInTheDocument();
  });
});