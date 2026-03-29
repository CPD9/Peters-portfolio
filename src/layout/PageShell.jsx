import { Navbar, StarsCanvas } from "../components";

const PageShell = ({ children }) => {
  return (
    <div className='relative z-0 bg-primary min-h-screen'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
      </div>
      <div className='relative z-0 pt-28 pb-24 px-6 max-w-7xl mx-auto'>
        {children}
      </div>
      <div className='relative z-0 h-48'>
        <StarsCanvas />
      </div>
    </div>
  );
};

export default PageShell;
