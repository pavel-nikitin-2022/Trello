type HeaderBlockType = {
    headerText: string, 
    type: HeaderModeType, 
    onClick: () => void, 
    changeName: (newHeader: string) => void,
};

type HeaderModeType = "input" | "header";
