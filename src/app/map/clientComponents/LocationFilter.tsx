'use client';

import { Menu, Popover, Switch, Transition } from '@headlessui/react';
import * as React from 'react';
import Image from 'next/image';

const solutions = [
  {
    name: 'Insights',
    description: 'Measure actions your users take',
    href: '##',
  },
  {
    name: 'Automations',
    description: 'Create your own targeted content',
    href: '##',
  },
  {
    name: 'Reports',
    description: 'Keep track of your growth',
    href: '##',
  },
];

export default function LocationFilter() {
  const [enabled, setEnabled] = React.useState(false);
  return (
    <div className='absolute space-x-2 left-3 mt-2 flex items-center px-2 py-1 bg-gray-800/70 rounded-full'>
      <Popover className='relative'>
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
               h-8 w-8 inline-flex justify-center items-center rounded-full bg-sky-200/60 px-2 py-2 text-white hover:text-opacity-500 focus:outline focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <Image
                className='cursor-pointer'
                src='/filterIcon.svg'
                alt='Filter Icon'
                width={24}
                height={24}
                priority
              />
            </Popover.Button>
            <Transition
              as={React.Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute z-10 mt-3 w-screen max-w-[150px]'>
                <div className='overflow-hidden rounded-lg shadow-lg ring-2 ring-black ring-opacity-5'>
                  <div className='relative grid gap-6 bg-white px-3 py-6 lg:grid-cols-2'>
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
                      >
                        <div className='ml-4'>
                          <p className='text-sm font-medium text-gray-900'>{item.name}</p>
                          <p className='text-sm text-gray-500'>{item.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-blue-200/60' : 'bg-blue-300/60'}
          relative inline-flex h-[32px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className='sr-only'>Use setting</span>
        <div
          aria-hidden='true'
          className={`${enabled ? 'translate-x-8' : 'translate-x-0'}
           pointer-events-none inline-flex justify-center items-center h-[28px] w-[28px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        >
          <Image
            className='cursor-pointer'
            src={`${enabled ? '/volleyBallIcon.svg' : '/courtIcon.svg'}`}
            alt='Court Icon'
            width={16}
            height={16}
            priority
          />
        </div>
      </Switch>
    </div>
  );
}
