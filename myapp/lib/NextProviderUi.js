'use client'
import * as React from "react";

// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";

function NextProviderUi({children}) {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}

export default NextProviderUi