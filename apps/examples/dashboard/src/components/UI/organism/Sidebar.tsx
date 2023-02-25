/* eslint-disable jsx-a11y/anchor-is-valid */
import { Sidebar as S, useAppShell } from "@nordice/core";
import {
  IconLayout2,
  IconLogout,
  IconNotes,
  IconPackage,
  IconWallet,
} from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";
import * as React from "react";

const links = [
  {
    id: 1,
    name: "Dashboard",
    icon: IconLayout2,
    href: "/dashboard",
  },
  {
    id: 2,
    name: "Product Stock",
    icon: IconPackage,
    href: "/product-stock",
  },
  {
    id: 3,
    name: "List Order",
    icon: IconNotes,
    href: "/list-order",
  },
  {
    id: 4,
    name: "Transaction",
    icon: IconWallet,
    href: "/transaction",
  },
];

const Sidebar = () => {
  const location = useLocation();
  const { sidebarExpanded } = useAppShell();

  const onLogout = async () => {};

  return (
    <S
      logo={<h1 className="text-2xl font-bold text-frost2">S</h1>}
      expanded={sidebarExpanded}
      onSidebarClose={() => {}}
    >
      <S.Items>
        {links.map(({ id, name, icon: Icon, href }) => (
          <S.Item
            key={id}
            isActive={href === location.pathname}
            expanded={sidebarExpanded}
          >
            <Link to={href}>
              <Icon />
              <span>{name}</span>
            </Link>
          </S.Item>
        ))}
      </S.Items>
      <S.Items>
        <S.Item
          isActive={"/logout" === location.pathname}
          expanded={sidebarExpanded}
          onClick={onLogout}
        >
          <a>
            <IconLogout />
            <span>Logout</span>
          </a>
        </S.Item>
      </S.Items>
    </S>
  );
};

export default Sidebar;
