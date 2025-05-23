import React, { createContext, ReactNode, useContext, useMemo } from 'react';
import { Nullable } from '../../utils/typeHelpers';
import { IntersectItem } from './IntersectItem';
import invariant from 'ts-invariant';

export const VirtualizationContext = createContext<
  Nullable<{
    getVirtualList<T>({
      items,
      content,
    }: {
      items: Array<T>;
      content: (item: T) => ReactNode;
    }): React.JSX.Element[];
  }>
>(null);

export function VirtualizationContextProvider({
  root,
  children,
}: {
  root: Nullable<HTMLElement>;
  children: ReactNode;
}) {
  const context = useMemo(() => {
    function getVirtualList<T>({
      items,
      content,
    }: {
      items: Array<T>;
      content: (item: T) => ReactNode;
    }) {
      return items.map((item, i) => (
        <IntersectItem key={i} root={root}>
          {content(item)}
        </IntersectItem>
      ));
    }

    return { getVirtualList };
  }, []);
  return (
    <VirtualizationContext.Provider value={context}>
      {children}
    </VirtualizationContext.Provider>
  );
}

export const useVirtualization = () => {
  const virtualizationContext = useContext(VirtualizationContext);
  invariant(virtualizationContext);
  return virtualizationContext;
};
