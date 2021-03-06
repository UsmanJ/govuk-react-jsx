import React from 'react';
import { Boolean } from '../../../utils/Boolean';

function Radios(props) {
  const { value, items, ...restProps } = props;

  // Map React-like `value` top level prop to the child items' checked status
  const processedItems = items.map(item => ({
    ...item,
    checked: item.value === value,
  }));

  return <Boolean items={processedItems} {...restProps} controlType="radios" />;
}

export { Radios };
