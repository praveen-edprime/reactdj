import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";

// Import icons from an icon library (assumed to be defined elsewhere)
import {
  BoxCubeIcon,
  CalenderIcon,
  ChevronDownIcon,
  GridIcon,
  HorizontaLDots,
  ListIcon,
  PageIcon,
  PieChartIcon,
  PlugInIcon,
  TableIcon,
  UserCircleIcon,
} from "../icons";

// Import SidebarContext to manage sidebar state (expanded, mobile, hovered)
import { useSidebar } from "../context/SidebarContext";

// Define the shape of a navigation item
type NavItem = {
  icon?: React.ReactNode; // Optional icon for the menu item
  name: string; // Display name of the menu item
  path?: string; // Optional URL path for navigation
  pro?: boolean; // Optional flag for "pro" badge
  new?: boolean; // Optional flag for "new" badge
  subItems?: NavItem[]; // Optional array of sub-items (supports nesting)
};

// Define main navigation items (displayed under "Menu" section)
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
          { name: "Student", path: "/StudentRegister", pro: false },
          { name: "Search Student", path: "/SearchStudent", pro: false },
          { name: "Academic Session", path: "/AcademicSession", pro: false },
          { name: "SimplePopupExample", path: "/SimplePopupExample", pro: false },
          { name: "Images", path: "/images", pro: false },
          { name: "Videos", path: "/videos", pro: false },
        ],
      },
    ],
  },
  {
    name: "Forms",
    icon: <ListIcon />,
    subItems: [{ name: "Form Elements", path: "/form-elements", pro: false }],
  },
  {
    name: "Tables",
    icon: <TableIcon />,
    subItems: [{ name: "Basic Tables", path: "/basic-tables", pro: false }],
  },
  {
    name: "Pages",
    icon: <PageIcon />,
    subItems: [
      { name: "Blank Page", path: "/blank", pro: false },
      { name: "404 Error", path: "/error-404", pro: false },
    ],
  },
  {
    icon: <CalenderIcon />,
    name: "Calendar",
    path: "/calendar",
  },
  {
    icon: <UserCircleIcon />,
    name: "User Profile",
    path: "/profile",
  },
];

// Define secondary navigation items (displayed under "Others" section)
const othersItems: NavItem[] = [
  {
    icon: <PieChartIcon />,
    name: "Charts",
    subItems: [
      { name: "Line Chart", path: "/line-chart", pro: false },
      { name: "Bar Chart", path: "/bar-chart", pro: false },
    ],
  },
  {
    icon: <BoxCubeIcon />,
    name: "UI Elements",
    subItems: [
      { name: "Alerts", path: "/alerts", pro: false },
      { name: "Avatar", path: "/avatars", pro: false },
      { name: "Badge", path: "/badge", pro: false },
      { name: "Buttons", path: "/buttons", pro: false },
      { name: "Images", path: "/images", pro: false },
      { name: "Videos", path: "/videos", pro: false },
    ],
  },
  {
    icon: <PlugInIcon />,
    name: "Authentication",
    subItems: [
      { name: "Sign In", path: "/signin", pro: false },
      { name: "Sign Up", path: "/signup", pro: false },
    ],
  },
];

// Main sidebar component
const AppSidebar: React.FC = () => {
  // Get sidebar state from context
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();



  // State to track open submenus using unique paths (e.g., "main-0-0")
  const [openSubmenus, setOpenSubmenus] = useState<string[]>([]);


  // Function to toggle a submenu (open/close)
  const handleSubmenuToggle = (submenuPath: string) => {
    setOpenSubmenus((prev) =>
      prev.includes(submenuPath)
        ? prev.filter((path) => path !== submenuPath && !path.startsWith(submenuPath + "-"))
        : [...prev, submenuPath]
    );
  };

  // Recursive function to render menu items and their sub-items
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

  // Render the sidebar
  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${
          isExpanded || isMobileOpen
            ? "w-[290px]"
            : isHovered
            ? "w-[290px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo section */}
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
      {/* Main navigation content */}
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            {/* Main Menu section */}
            <div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  "Menu"
                ) : (
                  <HorizontaLDots className="size-6" />
                )}
              </h2>
              {renderMenuItems(navItems, "main")}
            </div>
            {/* Others section */}
            <div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  "Others"
                ) : (
                  <HorizontaLDots />
                )}
              </h2>
              {renderMenuItems(othersItems, "others")}
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;