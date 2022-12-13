import AirnautsLogo from 'assets/images/logo.png';
import Image from 'next/image';
import React from 'react';

export const ArLayout = function ArLayout({ children }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <Image
        alt="Alt text"
        src={AirnautsLogo}
      />
      {children}
    </div>
  );
};
