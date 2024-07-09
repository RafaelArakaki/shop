'use client'

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { ProductsProvider } from './context/Context';

const Page = () => {  

  return (
    <ProductsProvider>
      <main>
        <Header />
        <Home />
        <Footer />
      </main>  
    </ProductsProvider>  
  );
}

export default Page;