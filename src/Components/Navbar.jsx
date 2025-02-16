const Navbar = () => {
 
  return (
    <div>
        <nav className="h-screen w-64 bg-gray-900 text-white p-5 flex flex-col space-y-4">
      <h1 className="text-xl font-bold">Menu</h1>
      <ul className="flex flex-col space-y-3">
        <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Welcome</li>
        <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Dashboard</li>
        <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Task</li>
        <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">People</li>
        <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Report</li>
        <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Billing</li>
        <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Integration</li>
      </ul>
      </nav>
    </div>

  )
}

export default Navbar