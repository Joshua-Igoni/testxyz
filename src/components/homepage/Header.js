
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    MenuIcon,
    XIcon,
    CurrencyDollarIcon,
    CollectionIcon,
    ChatIcon,
    ClipboardCheckIcon
} from '@heroicons/react/outline';
import { Link } from 'react-router-dom';


    const Header = () => {
    return (
        <Popover className="relative  w-screen bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to = "/">
                <a href="#">
                    {/* <span className="sr-only">Workflow</span> */}
                    <h1 className="text-2xl">Appera</h1>
                </a>
            </Link>
            
            </div>
            <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <a href="#" className="text-base font-medium text-secondary-2 hover:text-gray-900">
                About Us
            </a>

            <a href="#" className="text-base font-medium text-secondary-2 hover:text-gray-900">
                Products
            </a>
            <a href="#" className="text-base font-medium text-secondary-2 hover:text-gray-900">
                Pricing
            </a>

            <a href="#" className="text-base font-medium text-secondary-2 hover:text-gray-900">
                Contacts
            </a>

            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link to = "/login">
                <a href="#" className=" bg-primary border-x border-y px-4 py-2 rounded-md border-white whitespace-nowrap text-base font-medium text-secondary-2 hover:text-gray-900">
                    Log In
                </a>
            </Link>
            
            <Link to = "/signup">
                <a href="#"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-indigo-700">
                    Sign up
                </a>
            </Link>
            
            </div>
        </div>
        </div>

        <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                <div>
                    
                </div>
                <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring--500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                </div>
                </div>
                <div className="mt-6">
                <nav className="grid gap-y-8">
                    <a
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                        <ClipboardCheckIcon className="flex-shrink-0 h-6 w-6 text-primary" aria-hidden="true" />
                        <span className="ml-3 text-base font-medium text-gray-900">About Us</span>
                    </a>
                    <a
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                        <CollectionIcon className="flex-shrink-0 h-6 w-6 text-primary" aria-hidden="true" />
                        <span className="ml-3 text-base font-medium text-gray-900">Products</span>
                    </a>
                    <a
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                        <CurrencyDollarIcon className="flex-shrink-0 h-6 w-6 text-primary" aria-hidden="true" />
                        <span className="ml-3 text-base font-medium text-gray-900">Pricing</span>
                    </a>
                    <ah
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                        <ChatIcon className="flex-shrink-0 h-6 w-6 text-primary" aria-hidden="true" />
                        <span className="ml-3 text-base font-medium text-gray-900">Contacts</span>
                    </ah>

                </nav>
                </div>
            </div>
            <div className="py-6 px-5 space-y-6">
                <div>
                <Link to = "/signup">
                    <a
                        href="#"
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-indigo-700"
                    >
                        Sign up
                    </a>
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{' '}
                    <Link to = "/login">
                        <a href="#" className="text-primary hover:text-indigo-500">
                            Log in
                        </a>
                    </Link>
                    
                </p>
                </div>
            </div>
            </div>
        </Popover.Panel>
        </Transition>
        </Popover>
    )
}

export default Header

