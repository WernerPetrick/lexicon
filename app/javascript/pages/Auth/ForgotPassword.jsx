import { Link } from '@inertiajs/react'
import Header from "../components/Header"

function ForgottenPassword() {
  return (
    <> 
      <Header/>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Forgot Password</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                id="email"
                type="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>

            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors" type="button">
              Send Reset Link
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Remembered your password? 
            <Link href="/sign_in" className="text-indigo-600 hover:text-indigo-500 font-medium"> Sign In</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgottenPassword
