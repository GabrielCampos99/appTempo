import React, { ComponentProps } from "react";

interface Props {
  children: React.ReactNode;
}

export const combineContext = (...components: React.FC<Props>[]): React.FC<Props> => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({ children }: ComponentProps<React.FC<any>>): JSX.Element => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }) => <>{children}</>
  );
};
