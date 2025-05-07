import { Link } from '@inertiajs/react';
import Logo from "../../../assets/lexicon_logo.png"
import dbcs from "../Components/Stylesheets/DashboardHeader.module.css"

function DashboardHeader(){

  const handleSignOut = (e) => {
      e.preventDefault()
      Inertia.delete('/sign_out')
    }

  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="block">
          <img src={Logo} alt="Lexicon Logo" className={dbcs.logo} />
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link href="/stores" className="text-gray-500 transition hover:text-gray-500/75">
                  Stores
                </Link>
              </li>

              <li>
                <Link href="/users" className="text-gray-500 transition hover:text-gray-500/75">
                  Users
                </Link>
              </li>

              <li>
                <Link href="/books" className="text-gray-500 transition hover:text-gray-500/75">
                  Books
                </Link>
              </li>

              <li>
                <Link href="/documentation" className="text-gray-500 transition hover:text-gray-500/75">
                  Documentation
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">

                <button
                  onClick={handleSignOut}
                  className="bg-zinc-950 text-white px-4 py-2 rounded-xl shadow hover:bg-zinc-500 transition"
                  type='button'
                >
                  Sign Out
                </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader