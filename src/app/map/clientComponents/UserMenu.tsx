'use client';

import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import Image from 'next/image';
import * as React from 'react';

interface IUser {
  name: string;
  email: string;
  imageUrl: string;
}
interface IUserNavigationItem {
  name: string;
  href: string;
}

const user: IUser = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const navigations: IUserNavigationItem[] = [
  {
    name: 'Your Profile',
    href: '#',
  },
  {
    name: 'Settings',
    href: '#',
  },
  {
    name: 'Sign out',
    href: '#',
  },
];

export default function UserMenu() {
  return (
    <div className='absolute right-3 mt-2 items-center'>
      {/* Profile dropdown */}
      <Menu as='div' className='relative'>
        <div>
          <Menu.Button
            className='flex max-w-xs items-center rounded-full
                 bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
          >
            <span className='sr-only'>Open user menu</span>
            <Image
              className='h-10 w-10 rounded-full'
              priority={false}
              src={user.imageUrl}
              alt=''
              width={32}
              height={32}
            />
          </Menu.Button>
        </div>
        <Transition
          as={React.Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            {navigations.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  // TODO: replace with nextJS Link
                  <a
                    href={item.href}
                    className={clsx(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700'
                    )}
                  >
                    {item.name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
