import React from 'react';

export const slash = () => {
  return (
    <div>
      <div
        onClick={() => console.log('hi from slash')}
      >Hello Dere from slash</div>
      <a href="test">navigate to props tester</a>
    </div>
  )
}