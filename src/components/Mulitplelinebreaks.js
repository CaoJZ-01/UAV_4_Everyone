import React from 'react';

function Multiplelinebreaks({ count }) {
  const lineBreaks = Array(count).fill(<br />);

  return <>{lineBreaks}</>;
}

export default Multiplelinebreaks;
