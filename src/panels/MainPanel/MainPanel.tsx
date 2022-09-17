import React from "react";
import styled from "@emotion/styled";

import CardBlock from "@components/CardBlock";

const Panel = styled.div`
    height: 100%;
    background: #0079bf;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function MainPanel() {
    return (
        <Panel>
            <CardBlock/>
        </Panel>
    );
}

export default React.memo(MainPanel);