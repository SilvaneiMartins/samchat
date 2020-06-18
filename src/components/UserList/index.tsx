import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} />
            <strong>{nickname}</strong>
            {isBot && <span>Bot</span>}
        </User>
    );
};

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname="Silvanei Martins" />

            <Role>Online - 5</Role>
            <UserRow nickname="Silvanei Martins" isBot />
            <UserRow nickname="Mercado" />
            <UserRow nickname="Saldore" />
            <UserRow nickname="Martins" />
            <UserRow nickname="Almeida" />
            <UserRow nickname="Joaosão" />

            <Role>Offline - 18</Role>
            <UserRow nickname="Silvanei Martins" isBot />
            <UserRow nickname="Carlos" />
            <UserRow nickname="Silvio" />
            <UserRow nickname="Jorzinho" />
            <UserRow nickname="João" />
            <UserRow nickname="Roberto" />
            <UserRow nickname="Edmundo" />
            <UserRow nickname="Mazinho" />
            <UserRow nickname="Silvana" />
            <UserRow nickname="Maria" />
            <UserRow nickname="Mariazinha" />
            <UserRow nickname="Silvinho" />
            <UserRow nickname="BarberShop" />
        </Container>
    );
};

export default UserList;
