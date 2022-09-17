import React from "react";

function useInput(inputRef: React.RefObject<HTMLTextAreaElement>, ) {

    const onInput = () => {
        if (!inputRef.current) return;
        inputRef.current.style.height = "0px";
        inputRef.current.style.height = (inputRef.current.scrollHeight) - 4 + "px";
    };

    React.useEffect(() => {
        if (!inputRef.current) return;
        onInput();

        inputRef.current.addEventListener("input", onInput);

        return () => {
            inputRef.current?.removeEventListener("input", onInput);
        };
    });
}

export default useInput;