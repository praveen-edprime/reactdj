import { useState } from "react";
import { Link } from "react-router";
import { ChevronDownIcon, GridIcon, UserCircleIcon } from "../icons";
import { useSidebar } from "../context/SidebarContext";

type NavItem = {
  icon?: React.ReactNode;
  name: string;
  path?: string;
  subItems?: NavItem[];
};

const navItems: NavItem[] = [
  {
    icon: <GridIcon />,
    name: "Dashboard",
    path: "/",
  },
  {
    icon: <UserCircleIcon />,
    name: "Student",
    subItems: [
      {
        name: "Student Enrollment",
        subItems: [
          { name: "Student", path: "/StudentRegister" },
          { name: "Search Student", path: "/SearchStudent" },
          { name: "Badge", path: "/badge" },
          { name: "Buttons", path: "/buttons" },
          { name: "Images", path: "/images" },
          { name: "Videos", path: "/videos" },
        ],
      },
    ],
  },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const [openSubmenus, setOpenSubmenus] = useState<string[]>([]);

  const handleSubmenuToggle = (submenuPath: string) => {
    setOpenSubmenus((prev) =>
      prev.includes(submenuPath)
        ? prev.filter((path) => path !== submenuPath && !path.startsWith(submenuPath + "-"))
        : [...prev, submenuPath]
    );
  };

  const renderMenuItems = (
    items: NavItem[],
    menuType: string,
    parentPath: string[] = [],
    level: number = 0
  ) => (
    <ul className={`flex flex-col gap-4 ${level > 0 ? `ml-${level * 4} mt-2` : ""}`}>
      {items.map((nav, index) => {
        const submenuPath = [...parentPath, `${menuType}-${index}`].join("");
        const isSubmenuOpen = openSubmenus.includes(submenuPath);

        return (
          <li key={nav.name}>
            {nav.subItems ? (
              <button
                onClick={() => handleSubmenuToggle(submenuPath)}
                className={`menu-item group w-full text-left flex items-center ${
                  isSubmenuOpen ? "menu-item-active" : "menu-item-inactive"
                } cursor-pointer ${
                  !isExpanded && !isHovered ? "lg:justify-center" : "lg:justify-start"
                }`}
              >
                <span
                  className={`menu-item-icon-size ${
                    isSubmenuOpen ? "menu-item-icon-active" : "menu-item-icon-inactive"
                  }`}
                >
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className="menu-item-text">{nav.name}</span>
                )}
                {(isExpanded || isHovered || isMobileOpen) && (
                  <ChevronDownIcon
                    className={`ml-auto w-5 h-5 transition-transform duration-200 ${
                      isSubmenuOpen ? "rotate-180 text-brand-500" : ""
                    }`}
                  />
                )}
              </button>
            ) : (
              nav.path && (
                <Link
                  to={nav.path}
                  className={`menu-item group flex items-center ${
                    !isExpanded && !isHovered ? "lg:justify-center" : "lg:justify-start"
                  }`}
                >
                  <span className="menu-item-icon-size">{nav.icon}</span>
                  {(isExpanded || isHovered || isMobileOpen) && (
                    <span className="menu-item-text">{nav.name}</span>
                  )}
                </Link>
              )
            )}
            {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isSubmenuOpen ? "block" : "hidden"
                }`}
              >
                {renderMenuItems(nav.subItems, menuType, [...parentPath, `${menuType}-${index}`], level + 1)}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <aside
      className={`fixed mt-16 lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${isExpanded || isMobileOpen ? "w-[290px]" : isHovered ? "w-[290px]" : "w-[90px]"}
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-8 flex ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}
      >
        <Link to="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <img
                className="dark:hidden"
                src="/images/logo/EdPrime_uni_logoo.png"
                alt="Logo"
                width={150}
                height={40}
              />
              <img
                className="hidden dark:block"
                src="/images/logo/EdPrime_uni_logoo.png"
                alt="Logo"
                width={150}
                height={40}
              />
            </>
          ) : (
            <img
              src="/images/logo/EdPrime_uni_logo.png"
              alt="Logo"
              width={32}
              height={32}
            />
          )}
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                  !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
                }`}
              >
                {isExpanded || isHovered || isMobileOpen ? "Menu" : <HorizontaLDots className="size-6" />}
              </h2>
              {renderMenuItems(navItems, "main")}
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;
