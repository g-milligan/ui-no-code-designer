export {};

enum EnumDataType {
  Object,
  Array,
  Enum,
  Number,
  Boolean,
  String
}

abstract class BaseType {
    protected abstract key: string;
    protected abstract label: string;
    protected abstract type: EnumDataType;
    protected abstract validate: () => string | undefined;
    protected abstract toString: () => string;
    protected abstract default: any;
    protected abstract required: boolean;
}