import React, { FC, useMemo } from 'react';
import { InputStore } from './input.store';

interface IInputProps {
  store: InputStore;
}

export const Input: FC<IInputProps> = ({ store }) => {
  const { params } = store;

  return (
    <div>
      <input {...params} />
    </div>
  );
};
