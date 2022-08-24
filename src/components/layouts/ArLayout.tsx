import AirnautsLogo from 'assets/images/logo.png'
import Image from 'next/image'
import React from 'react'

export const ArLayout: React.FC<React.PropsWithChildren<{}>> = ({children}) => (
    <div style={{textAlign:'center'}}>
        <Image src={AirnautsLogo} />
        {children}
    </div>
)