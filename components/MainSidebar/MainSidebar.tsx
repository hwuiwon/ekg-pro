import { Sidebar } from 'flowbite-react'
import {
  HiBriefcase,
  HiChartPie,
  HiQuestionMarkCircle,
  HiSearch,
  HiUsers,
} from 'react-icons/hi'

const MainSidebar: React.FC = () => {
  return (
    <Sidebar
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-white"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800">
        <a
          href="https://flowbite.com/"
          className="flex items-center pl-2.5 mb-5"
        >
          <span className="self-center text-xl font-semibold whitespace-nowrap text-primary-600 dark:text-white">
            EKG Pro
          </span>
        </a>

        <Sidebar.Items className="space-y-2 font-medium">
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiBriefcase}>
              Appointments
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUsers}>
              Patients
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiSearch}>
              Analysis
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiQuestionMarkCircle}>
              Help
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </div>
    </Sidebar>
  )
}

export default MainSidebar
