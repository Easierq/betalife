import { Suspense } from "react";
import Container from "./components/container";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-16">
        {/* <Suspense fallback={Heading}> */}
        <Sidebar />
        {/* </Suspense> */}

        <Container>{children}</Container>
      </div>
    </>
  );
};

export default Layout;
