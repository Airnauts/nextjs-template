import AirnautsLogo from 'assets/images/logo.png';
import Image from 'next/image';
import React from 'react';

export function ArLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <Image
        alt="Alt text"
        src={AirnautsLogo}
      />
      {children}
    </div>
  );
}
