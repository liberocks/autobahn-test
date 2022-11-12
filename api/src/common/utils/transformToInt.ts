import { TransformFnParams } from 'class-transformer';

export const transformToInt = ({ value }: TransformFnParams) => {
  return parseInt(value, 10);
};
