import React, { FC } from 'react';
import PeriodicTableCell from '../PeriodicTableCell/PeriodicTableCell';
import PeriodicTableCellSpacer from '../PeriodicTableCellSpacer/PeriodicTableCellSpacer';

interface PeriodicTableRowProps {
  elementNumbers: number[];
}

const PeriodicTableRow: FC<PeriodicTableRowProps> = (props) => (
  <div className="PeriodicTableRow" data-testid="PeriodicTableRow">
    {props.elementNumbers.map((elementNumber, index) => {
        if (elementNumber) {
          return (
            <PeriodicTableCell elementNumber={elementNumber} key={index} />
          );
        } else {
          return (
            <PeriodicTableCellSpacer key={index} />
          )
        }
        
      })}
  </div>
);

export default PeriodicTableRow;
