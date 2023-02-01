import React, { FC } from 'react';
import styles from './PeriodicTable.module.css';
import table from '../../data/Table';
import PeriodicTableRow from '../PeriodicTableRow/PeriodicTableRow';

interface PeriodicTableProps {}

const PeriodicTable: FC<PeriodicTableProps> = () => (
  <div className="PeriodicTable" data-testid="PeriodicTable">
    {table.map((elementNumbers, index) => {
      return (
        <PeriodicTableRow key={index} elementNumbers={elementNumbers} />
      )
    })}
  </div>
);

export default PeriodicTable;
