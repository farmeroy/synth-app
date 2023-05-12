import MachineInputBPM from "../MachineInputBPM";
import MachineButtonStart from "../MachineButtonStart";
import MachineButtonNoteAdd from "../MachineButtonNoteAdd/MachineButtonNoteAdd";
import MachineControlBeats from "../MachineControlBeats";
import MachineButton from "../MachineButton/MachineButton";
import { useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { GridDots } from "tabler-icons-react";

function MachineView() {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    setIsSticky(scrollPosition > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = (
    <div className="xs:flex-col md:flex">
      <MachineControlBeats />
      <MachineInputBPM />
    </div>
  );

  const hamburgerMenu = (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="inline-flex items-center justify-center p-2 m-2 rounded-full bg-emerald focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <GridDots className="w-8 h-8 text-black justify-self-end" />
            )}
          </Disclosure.Button>
          <Disclosure.Panel className="md:hidden">
            <div className="flex flex-col items-center pt-4 pb-2 space-y-1">
              <MachineControlBeats />
              <MachineInputBPM />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center  px-4 py-3  ${
        isSticky ? "lg:justify-center" : ""
      }`}
    >
      <div className="h-full">
        <MachineButtonStart />
        <MachineButtonNoteAdd />
      </div>
      <div className="lg:hidden">{isSticky ? hamburgerMenu : menuItems}</div>
      <div className="hidden lg:flex lg:flex-grow">{menuItems}</div>
    </nav>
  );
}

export default MachineView;
