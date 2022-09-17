import React from "react";
import styled from "@emotion/styled";

import useInput from "../hooks/useInput";

const Header = styled.div`
    color: #172b4d;
    font-size: 14px;
    margin-left: 10px;
    font-family: CharlieDisplay;
    font-weight: 600;
    word-wrap: break-word;
    width: 80%;
`;

const Input = styled.textarea`
    color: #172b4d;
    font-size: 14px;
    margin-left: 10px;
    font-family: CharlieDisplay;
    font-weight: 600;
    width: 80%;
    resize: none;
    overflow-y:hidden;

    &:focus { 
        outline: none !important;
        border: 2px solid #0079bf;
        border-radius: 3px;
    }
`;

function HeaderBlock(
    { headerText, type, onClick, changeName }: HeaderBlockType) {

    const InputRef = React.useRef<HTMLTextAreaElement>(null);
    useInput(InputRef);

    const onBlur = () => {
        if (InputRef.current)
            changeName(InputRef.current.value);
    };

    const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event?.key === "Enter" && InputRef.current) {
            changeName(InputRef.current.value);
        }
    };

    React.useEffect(() => {
        if (InputRef.current) InputRef.current.select();
    });

    return (
        (
            type === "header" ?
                <Header onClick={onClick}>
                    {headerText}
                </Header> :

                <Input
                    autoFocus
                    defaultValue={headerText}
                    ref={InputRef}
                    onBlur={onBlur}
                    onKeyDown={onKeyDown}
                />
        )
    );
}

export default React.memo(HeaderBlock);