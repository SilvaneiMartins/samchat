import React from 'react'

import ServerButton from '../../components/ServerButton'
import { Container, Separator } from './styles'

const ServerList: React.FC = () => {
    return (
        <Container>
            <ServerButton isHome />

            <Separator />

            <ServerButton mentions={6} />
            <ServerButton hasNotifications />
            <ServerButton mentions={1} />
            <ServerButton hasNotifications />
            <ServerButton hasNotifications mentions={10} />
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton />
            <ServerButton hasNotifications mentions={7} />
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications mentions={22} />
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton mentions={2}/>

        </Container>
    )
}

export default ServerList