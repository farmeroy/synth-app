import MachineInputBPM from "../MachineInputBPM";
import MachineButtonStart from "../MachineButtonStart";
import MachineButtonNoteAdd from "../MachineButtonNoteAdd/MachineButtonNoteAdd";
import MachineControlBeats from "../MachineControlBeats";
import MachineButtonSave from "../MachineButtonSave";

import { useState, useEffect } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { GridDots, X } from "tabler-icons-react";

function MachineView() {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    setIsSticky(scrollPosition > 50);
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
              ? "p-2 border flex-wrap w-fit flex rounded-lg absolute top-0 border-1 border-violetlight bg-[#0009]"
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
          <Disclosure.Panel className="xs:flex-wrap md:flex lg:hidden">
            <MachineControlBeats />
            <MachineInputBPM />
            <MachineButtonSave />
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );

  return (
    <nav
      className={`sticky w-full top-0 z-20 items-center  ${
        isSticky ? "lg:justify-center" : ""
      }`}
    >
      <div className="flex h-full">
        <MachineButtonStart />
        <MachineButtonNoteAdd />
        <MachineButtonSave />
        <div className="relative flex w-full lg:hidden">
          {isSticky ? hamburgerMenu : menuItems}
        </div>
        <div className="hidden lg:flex lg:flex-grow ">{menuItems}</div>
      </div>
    </nav>
  );
}

export default MachineView;
