import Image from 'next/image'
import NavLinks from './nav-links'

export default function SideBar() {
  return (
    <>
          {/* <!-- Static sidebar for desktop --> */}
          <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* <!-- Sidebar component, swap this element with another sidebar if you like --> */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <Image width={32} height={32} 
            className="" 
            src="/next.svg" 
            alt="Rentora" />
          </div>
         <NavLinks/> 
        </div>
      </div>
    </>
  )
}
