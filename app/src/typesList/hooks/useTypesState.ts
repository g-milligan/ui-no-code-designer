import { useState } from "react";

export const useTypeState = () => {
    const [state, setState] = useState<{types: any[]}>({types:[]});

    const addType = (newType: any) => {
        setState(prevState => ({
            ...prevState,
            types: [...prevState.types, newType]
        }));
    };

    return {
        state,
        addType
    };
};