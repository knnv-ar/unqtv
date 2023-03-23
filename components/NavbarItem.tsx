import React from "react";

interface NavbarItemProps {
  label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  label
}) => {
  return (
    <div className="text-white cursor-pointer hhover:text-gray-300 transition">
      {label}
    </div>
  );
};

export default NavbarItem;