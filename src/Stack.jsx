import React from 'react';

const Stack = ({ direction = 'row', spacing = 8, justify = 'flex-start', align = 'center', children, style = {}, ...rest }) => {
  const gap = typeof spacing === 'number' ? `${spacing}px` : spacing;
  const flexDirection = direction === 'column' ? 'column' : 'row';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection,
        gap,
        justifyContent: justify,
        alignItems: align,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Stack;
