import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export const ToggleMenu = () => {
  return (
    /* Toggle Menu Radix UI */
    <NavigationMenu.Root className="relative z-[1] flex w-fit justify-center">
      <NavigationMenu.List className="center shadow-gray-400 m-0 flex list-none rounded-[6px] bg-white p-1 shadow-[0_1px_5px]">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-gray-800 hover:bg-gray-200 focus:shadow-gray-400 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            Ver mais{' '}
            <CaretDownIcon
              className="relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
            <ul className="text-gray-800 m-0 flex flex-col clist-none gap-4 p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
              <Link title="Quem somos" href="https://www.olivas.digital/">
                Quem somos
              </Link>
              <Link title="Metodologia" href="https://www.olivas.digital/">
                Metodologia
              </Link>
              <Link title="Conteúdos para você" href="https://www.olivas.digital/">
                Conteúdos para você
              </Link>
              <Link title="Canais de comunicação" href="https://www.olivas.digital/">
                Canais de comunicação
              </Link>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="text-gray-800 focus:shadow-gray-400 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            href="https://www.olivas.digital/"
          >
            Nossas soluções
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};