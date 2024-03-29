'use client';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC, Fragment } from 'react';

import { classNames } from '@/utils/utilityFunctions';

const navigation = [
	{
		name: 'Dashboard',
		href: '#',
	},
	{
		name: 'Team',
		href: '#',
	},
	{
		name: 'Projects',
		href: '#',
	},
	{
		name: 'Calendar',
		href: '#',
	},
];

const Navbar: FC = () => {
	const pathname = usePathname();
	return (
		<Disclosure as='nav' className='fixed w-full'>
			{({ open }) => (
				<>
					<div className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-8'>
						<div className='flex h-16 justify-between'>
							<div className='flex px-2 lg:px-0'>
								<Link href='/' className='flex flex-shrink-0 items-center'>
									<Image
										height={32}
										width={0}
										quality={75}
										priority={true}
										className='h-8 w-auto'
										src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
										alt='Company'
									/>
								</Link>
							</div>
							<div className='flex items-center lg:hidden'>
								{/* Mobile menu button */}
								<Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
									<span className='absolute -inset-0.5' />
									<span className='sr-only'>Open main menu</span>
									{open ? <p>Close</p> : <p>Menu</p>}
								</Disclosure.Button>
							</div>
							<div className='hidden lg:ml-4 lg:flex lg:items-center'>
								<div className='hidden lg:flex lg:space-x-8'>
									{navigation.map(item => (
										<Link
											key={item.name}
											href='#'
											className={classNames(
												pathname.toLowerCase().split('/').includes(item.name.toLowerCase())
													? 'border-indigo-500'
													: 'border-transparent',
												'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-gray-900',
											)}
										>
											{item.name}
										</Link>
									))}
								</div>

								{/* Profile dropdown */}
								<Menu as='div' className='relative ml-8 flex-shrink-0'>
									<div>
										<Menu.Button className='relative flex rounded-full bg-white text-sm outline-none ring-2 ring-indigo-500 ring-offset-2'>
											<span className='absolute -inset-1.5' />
											<span className='sr-only'>Open user menu</span>
											<img
												className='h-8 w-8 rounded-full'
												src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
												alt=''
											/>
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter='transition ease-out duration-100'
										enterFrom='transform opacity-0 scale-95'
										enterTo='transform opacity-100 scale-100'
										leave='transition ease-in duration-75'
										leaveFrom='transform opacity-100 scale-100'
										leaveTo='transform opacity-0 scale-95'
									>
										<Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
											<Menu.Item>
												{({ active }) => (
													<a
														href='#'
														className={classNames(
															active ? 'bg-gray-100' : '',
															'block px-4 py-2 text-sm text-gray-700',
														)}
													>
														Your Profile
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href='#'
														className={classNames(
															active ? 'bg-gray-100' : '',
															'block px-4 py-2 text-sm text-gray-700',
														)}
													>
														Settings
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href='#'
														className={classNames(
															active ? 'bg-gray-100' : '',
															'block px-4 py-2 text-sm text-gray-700',
														)}
													>
														Sign out
													</a>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>

					<Disclosure.Panel className='lg:hidden'>
						<div className='space-y-1 pb-3 pt-2'>
							{/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
							<Disclosure.Button
								as='a'
								href='#'
								className='block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700'
							>
								Dashboard
							</Disclosure.Button>
							<Disclosure.Button
								as='a'
								href='#'
								className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800'
							>
								Team
							</Disclosure.Button>
							<Disclosure.Button
								as='a'
								href='#'
								className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800'
							>
								Projects
							</Disclosure.Button>
							<Disclosure.Button
								as='a'
								href='#'
								className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800'
							>
								Calendar
							</Disclosure.Button>
						</div>
						<div className='border-t border-gray-200 pb-3 pt-4'>
							<div className='flex items-center px-4'>
								<div className='flex-shrink-0'>
									<img
										className='h-10 w-10 rounded-full'
										src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
										alt=''
									/>
								</div>
								<div className='ml-3'>
									<div className='text-base font-medium text-gray-800'>Tom Cook</div>
									<div className='text-sm font-medium text-gray-500'>tom@example.com</div>
								</div>
								<button
									type='button'
									className='relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
								>
									<span className='absolute -inset-1.5' />
									<span className='sr-only'>View notifications</span>
									<p>Bell</p>
								</button>
							</div>
							<div className='mt-3 space-y-1'>
								<Disclosure.Button
									as='a'
									href='#'
									className='block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800'
								>
									Your Profile
								</Disclosure.Button>
								<Disclosure.Button
									as='a'
									href='#'
									className='block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800'
								>
									Settings
								</Disclosure.Button>
								<Disclosure.Button
									as='a'
									href='#'
									className='block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800'
								>
									Sign out
								</Disclosure.Button>
							</div>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export default Navbar;
