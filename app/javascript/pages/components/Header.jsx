import { Link, usePage } from '@inertiajs/react'
import { Inertia } from '@inertiajs/inertia'
import Logo from "../../assets/lexicon_logo.png"

function Header(){
  const { props } = usePage()
  const currentUser = props.current_user

  const handleSignOut = (e) => {
    e.preventDefault()
    Inertia.delete('/sign_out')
  }

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
          <img src={Logo} alt="Lexicon Logo" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-slate-400 transition font-medium">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-slate-400 transition font-medium">About</Link>
            <Link href="/features" className="text-gray-700 hover:text-slate-400 transition font-medium">Features</Link>
            <Link href="/pricing" className="text-gray-700 hover:text-slate-400 transition font-medium">Pricing</Link>
            <Link href="/contact" className="text-gray-700 hover:text-slate-400 transition font-medium">Contact</Link>
          </div>

          <div className="flex space-x-4 items-center">
            {currentUser ? (
              <>
                <span className="text-gray-700 font-medium">{currentUser.email}</span>
                <button
                  onClick={handleSignOut}
                  className="bg-zinc-950 text-white px-4 py-2 rounded-xl shadow hover:bg-zinc-500 transition"
                  type='button'
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/sign_up" className="bg-zinc-950 text-white px-4 py-2 rounded-xl shadow hover:bg-zinc-500 transition">Sign Up</Link>
                <Link href="/sign_in" className="bg-zinc-950 text-white px-4 py-2 rounded-xl shadow hover:bg-zinc-500 transition">Sign In</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
