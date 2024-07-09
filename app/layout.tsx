import StyledComponentsRegistry from './lib/registry';
import type { Metadata } from "next";
import { ReactQueryProvider } from '@/provider/reactQueryProvider';
import './assets/css/globals.css';

export const metadata: Metadata = {
  title: "MKS Sistemas"
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="pt-br">
      <body>        
        <StyledComponentsRegistry>
          <ReactQueryProvider>
            {children}
          </ReactQueryProvider>     
        </StyledComponentsRegistry>           
      </body>
    </html>
  );
}

export default RootLayout;