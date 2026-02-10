import { useState } from "react";
import { AnyType, ArrayType, AvailableType, BooleanType, EnumType, NumberType, ObjectType, StringType } from "../../typing/BaseTypes";

export const useTypeState = () => {
    const [state, setState] = useState<{types: AnyType[]}>({types:[]});

    const getTypeNum = () => state.types.length + 1;

    const defaultStringType = (): StringType => {
        const typeNum = getTypeNum();
        return {
            key: `string_${typeNum}`,
            type: AvailableType.String,
            label: `String ${typeNum}`,
            validate: (value) => undefined,
            toCustomString: (value) => `${value}`,
            default: `string value ${typeNum}`,
            required: false
        };
    };

    const defaultObjectType = (): ObjectType => {
        const typeNum = getTypeNum();
        return {
            key: `object_${typeNum}`,
            type: AvailableType.Object,
            label: `Object ${typeNum}`,
            validate: (value) => undefined,
            toCustomString: (value) => `${value}`,
            default: "{}",
            required: false,
            keys: []
        };
    };

    const defaultArrayType = (): ArrayType => {
        const typeNum = getTypeNum();
        return {
            key: `array_${typeNum}`,
            type: AvailableType.Array,
            label: `Array ${typeNum}`,
            ofType: AvailableType.String,
            validate: (value) => undefined,
            toCustomString: (value) => `${value}`,
            default: "['a', 'b', 'c']",
            minLength: -1,
            maxLength: -1,
            required: false
        };
    };

    const defaultEnumType = (): EnumType => {
        const typeNum = getTypeNum();
        return {
            key: `enum_${typeNum}`,
            type: AvailableType.Enum,
            label: `Enum ${typeNum}`,
            ofType: AvailableType.String,
            validate: (value) => undefined,
            toCustomString: (value) => `${value}`,
            default: "",
            required: false,
            keys: []
        };
    };

    const defaultNumberType = (): NumberType => {
        const typeNum = getTypeNum();
        return {
            key: `number_${typeNum}`,
            type: AvailableType.Number,
            label: `Number ${typeNum}`,
            validate: (value) => undefined,
            toCustomString: (value) => `${value}`,
            default: 0,
            minNumber: -1,
            maxNumber: -1,
            required: false
        };
    };

    const defaultBooleanType = (): BooleanType => {
        const typeNum = getTypeNum();
        return {
            key: `boolean_${typeNum}`,
            type: AvailableType.Boolean,
            label: `Boolean ${typeNum}`,
            validate: (value) => undefined,
            toCustomString: (value) => `${value}`,
            default: true,
            required: false
        };
    };

    const addType = (newType: AnyType | undefined) => {
        setState(prevState => ({
            ...prevState,
            types: [
                ...prevState.types, 
                newType || defaultStringType()
            ]
        }));
    };

    const setTypeAtIndex = (
        index: number, 
        type: AvailableType) => {

        let swapType: AnyType;

        switch(type) {
            case AvailableType.String:
                swapType = defaultStringType();
                break;
            case AvailableType.Object:
                swapType = defaultObjectType();
                break;
            case AvailableType.Array:
                swapType = defaultArrayType();
                break;
            case AvailableType.Enum:
                swapType = defaultEnumType();
                break;
            case AvailableType.Number:
                swapType = defaultNumberType();
                break;
            case AvailableType.Boolean:
                swapType = defaultBooleanType();
                break;
        };
        
        setState(prevState => ({
            ...prevState,
            types: [
                ...prevState.types.splice(index, 1, swapType)
            ]
        }));
    };

    return {
        state,
        setTypeAtIndex,
        addType
    };
};