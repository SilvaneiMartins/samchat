import React from 'react'

import Logo from '../../assets/Logo.svg'
import { Button } from './styles'

export interface IProps {
    selected?: boolean
    isHome?: boolean
    hasNotifications?: boolean
    mentions?: number
}

const ServerButton: React.FC<IProps> = ({ selected, isHome, hasNotifications, mentions }) => {
    return (
        <Button
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            className={selected ? 'active' : ''}
        >
            {isHome && <img src={Logo} alt="Sam Chat" />}
        </Button>
    )
}

export default ServerButton