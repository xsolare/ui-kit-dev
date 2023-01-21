import type { MutableRefObject } from 'react';
import { v4 } from 'uuid';

export type TControllerRef<T> = MutableRefObject<T | undefined>;
export type Size = 's' | 'm' | 'l';
export const getId = (): string => {
  let uuid = v4();
  const possible = 'abcdef';
  uuid = uuid.replace(uuid.charAt(0), possible.charAt(Math.floor(Math.random() * possible.length)));
  return uuid;
};
