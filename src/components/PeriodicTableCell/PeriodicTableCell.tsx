import React, { FC } from 'react';
import elementsList from '../../data/Elements';

interface PeriodicTableCellProps {
  elementNumber: number;
}

const PeriodicTableCell: FC<PeriodicTableCellProps> = (props) => {
  const elementNumber = props.elementNumber;
  let elementData = elementsList[elementNumber];
  let category = elementData["category"];
  category = category.replaceAll(" ", "-");
  let atomicMass = elementData["atomic_mass"];
  
  return (
    <div>
      <div className={`PeriodicTableCell PeriodicTableCell-${category}`} data-testid="PeriodicTableCell">
        <div className="number">{elementNumber}</div>
        <div className="symbol">{elementData.symbol}</div>
        <div className="element-name">{elementData.name}</div>
        <div className="atomic-mass">{atomicMass}</div>
        
      </div>
      <div className="summary">
        <a className="anchor" id={elementData.name}>
          <p>
            About the element {elementData.name}: {elementData.summary}
          </p>
        </a>
      </div>
    </div>
  );
};

export default PeriodicTableCell;
