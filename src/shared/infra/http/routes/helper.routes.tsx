import React from 'react';
import { Outlet } from 'react-router-dom';

interface Props {
  provider: any;
}

export function ProviderRender({ provider: Provider }: Props) {
  return (
    <div>
      <Provider>
        <Outlet />
      </Provider>
    </div>
  );
}
