export enum AvailableType {
  Object = "object",
  Array = "array",
  Enum = "enum",
  Number = "number",
  Boolean = "boolean",
  String = "string",
};

type BaseType = {
    key: string;
    type: AvailableType;
    label: string;
    validate: (value: any) => string | undefined;
    toString: (value: any) => string;
    default: any;
    required: boolean;
};

export type ObjectType = BaseType & {
    keys: string[];
};

export type ArrayType = BaseType & {
    ofType: AvailableType;
    minLength?: number;
    maxLength?: number;
};

export type EnumType = BaseType & {
    ofType: AvailableType;
    keys: string[];
};

export type NumberType = BaseType & {
    minNumber?: number;
    maxNumber?: number;
};

export type BooleanType = BaseType & {};

export type StringType = BaseType & {
    minLength?: number;
    maxLength?: number;
};