import MachineInputBPM from "../MachineInputBPM";
import MachineButtonStart from "../MachineButtonStart";
import MachineButtonNoteAdd from "../MachineButtonNoteAdd/MachineButtonNoteAdd";
import MachineControlBeats from "../MachineControlBeats";
import { useState, useEffect } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { GridDots, X } from "tabler-icons-react";

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
        <div
          className={`${
            open
              ? "p-2 border rounded-lg absolute top-0 border-black bg-[#0009]"
              : ""
          }`}
        >
          <Disclosure.Button
            className={` inline-flex items-center justify-center p-2 m-2 rounded-full bg-emerald focus:outline-none focus:ring-2 focus:ring-inset ${
              open ? " w-8 h-8" : ""
            }`}
          >
            {open ? (
              <X className="w-8 h-8" />
            ) : (
              <GridDots className="w-8 h-8 p-1" />
            )}
          </Disclosure.Button>
          <Disclosure.Panel className="lg:hidden">
            <div className="xs:flex-col md:flex">
              <MachineControlBeats />
              <MachineInputBPM />
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );

  return (
    <nav
      className={`sticky top-0 z-50 items-center  ${
        isSticky ? "lg:justify-center" : ""
      }`}
    >
      <div className="flex h-full">
        <MachineButtonStart />
        <MachineButtonNoteAdd />
        <div className="relative flex lg:hidden">
          {isSticky ? hamburgerMenu : menuItems}
        </div>
      </div>
      <div className="hidden lg:flex lg:flex-grow ">{menuItems}</div>
    </nav>
  );
}

export default MachineView;
