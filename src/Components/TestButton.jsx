import '../style.scss';
import React, { useState } from 'react';
import TestComponent from 'Components/TestComponent';

export function TestButton() {
  const [state, setState] = useState('Click Me please!');

  return (
    <div>
      <button onClick={() => setState('CLICKED')}>{state}</button>
      <TestComponent />
    </div>
  );
}

export default TestButton;
