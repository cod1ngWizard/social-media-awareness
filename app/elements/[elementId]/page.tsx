import React from 'react';

function Page({ params }: { params: { elementId: string } }) {
  if (params.elementId === 'scrolling') {
    return <p>A page</p>;
  }
}

export default Page;
