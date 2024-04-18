import { ReactNode } from "react"
import SideBar from "../components/side-bar"
import TopNav from "../components/top-nav"
import { Provider } from 'react-redux'


export default function Layout({ children }: { children: ReactNode }) {

  return (
    
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      {/* Left nav */}
      <SideBar />

      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        {/* Top Nav */}
        <TopNav  />
        {/* Main Content */}
        <main className="p-4 sm:px-6 sm:py-0">
          {children}
        </main>
      </div>
    </div>

  )
}
