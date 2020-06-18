import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage
                        key={n}
                        author="Silvanei Martins"
                        date="18/08/2020"
                        content="É o meu aniversário!"
                    />
                ))}

                <ChannelMessage
                    author="Silvio Martins"
                    date="18/06/2020"
                    content={
                        <>
                            <Mention>@Silvanei Dev</Mention>, estou subindo no projetos no git, por favor confere lá?
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Digíte sua mensagem aqui #Chat Livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;
