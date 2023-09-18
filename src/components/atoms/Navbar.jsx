import React from "react";
import logoTransparent from '../../assets/images/logoTransparent.png';

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

 
export default function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="#0D0F13"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          INICIO
        </a>
      </Typography>
      

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          SERVICIOS
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="#0D0F13"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          GALERÍA
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="#0D0F13"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          METODOLOGÍA
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="#0D0F13"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          CONÓCENOS
        </a>
        </Typography>
    </ul>
    
  );
 
  return (
  <div className="-m-4 max-h-[768px] w-[calc(100%+48px)]">
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-0 px-14 lg:px-8 lg:py-4">
   
        <div className="flex items-center justify-between text-blue-gray-900 mt-1 mx-10">
          
        <img className="w-72 h-20" src={logoTransparent} alt="logo" />
         
          <div className="flex items-center gap-4">
            <div className="mr-0 hidden lg:block">{navList}</div>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span>CONTACTO</span>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>CONTACTO</span>
          </Button>
        </MobileNav>
      </Navbar>
      
    </div>
  );
}