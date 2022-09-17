import React from "react";
import styled from "@emotion/styled";
import EditorMoreIcon from "@atlaskit/icon/glyph/editor/more";
import AddIcon from "@atlaskit/icon/glyph/add";

import Header from "./Header";
const HEADER_TEXT_VALUE = "Задачи";

const CardPanel = styled.div`
    width: 250px;
    background: #ebecf0;
    border-radius: 3px;
    padding: 10px;
    position: relative;
`;

const Content = styled.div`
    padding-top: 5px;
    padding-bottom: 5px;
`;

const AddButton = styled.button`
    color: rgba(23, 43, 77, 0.5);
    font-family: CharlieDisplayEasy;
    border: none;
    background: transparent;
    position: relative;
    vertical-align: center;
    display: flex;
    align-items: center;
    transition: linear 0.1s;
    width: 90%;
    border-radius: 5px;
    padding-top: 5px;
    padding-bottom: 5px;

    &:hover {
        background: rgba(23, 43, 77, 0.1);
        color: #172b4d;
    }
`;

const PropIcon = styled.div`
    position: absolute;
    background: transparent;
    top: 5px; 
    right: 5px; 
    transition: linear 0.1s;
    border-radius: 5px;
    color: rgba(23, 43, 77, 0.5);

    &:hover {
        background: rgba(23, 43, 77, 0.1);
        color: #172b4d;
    }
`;

const AddButtonText = styled.div`
    font-size: 14px;
    font-weight: 900;
    position: relative;
    bottom: 1px;
    left: 5px;
`;

function CardBlock() {
    const [headerState, setHeaderState] = React.useState<HeaderModeType>("header");
    const [header, setHeader] = React.useState<string>(HEADER_TEXT_VALUE);

    return (
        <CardPanel>
            <PropIcon>
                <EditorMoreIcon label="icon_1"/>
            </PropIcon>

            <Header 
                type={headerState}
                headerText={header}
                onClick={()=>setHeaderState("input")}
                changeName={(newHeader: string)=>{
                    setHeaderState("header");
                    setHeader(newHeader ? newHeader: header);
                }}
            />

            <Content>

            </Content>

            <AddButton>
                <AddIcon label="icon_2" size="small"/>
                <AddButtonText>Добавить карточку</AddButtonText>
            </AddButton>
        </CardPanel>
    );
}

export default React.memo(CardBlock);