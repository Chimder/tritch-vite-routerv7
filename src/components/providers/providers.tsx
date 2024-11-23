import { ReactNode } from 'react'

import TanstackProvider from '@/components/providers/tanstack-query'
// import { ThemeProvider } from '@/components/providers/sessions.server.tsx'

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <TanstackProvider>
      {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> */}
        {children}
      {/* </ThemeProvider> */}
    </TanstackProvider>
  )
}

export default Providers
