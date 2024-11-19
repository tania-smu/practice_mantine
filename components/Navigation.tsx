"use client";

import { navOption } from "@/constant";
import { AppShell, Burger, Group, NavLink, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navigation = ({children}) => {
  const [opened, { toggle }] = useDisclosure();
  const pathname = usePathname();
  const [active, setActive] = useState(0);
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

          <Image src="/asset/icon.svg" width={45} height={45} alt="icon" />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        {navOption.map((option, index) => (
          <NavLink
            href={option.path}
            key={option.value}
            active={option.path === pathname}
            label={option.value}
            description={option.description}
            onClick={() => setActive(index)}
            color="dark"
            variant="filled"
          />
        ))}
      </AppShell.Navbar>
      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  );
};

export default Navigation;
