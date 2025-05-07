import { Link, useForm } from '@inertiajs/react'
import Header from "../components/Header"

function SignUp({ errors = {} }) {
  const { data, setData, post, processing } = useForm({
    user: {
      email: '',
      password: ''
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/sign_up', data);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sign Up</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="your@email.com"
                value={data.user.email} // Access nested email
                onChange={(e) => setData('user.email', e.target.value)} // Set nested email
                required
              />
              {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>} 
              {errors.password && <p className="text-red-500 text-xs mt-2">{errors.password[0]}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                placeholder="••••••••"
                value={data.user.password}
                onChange={(e) => setData('user.password', e.target.value)}
                required
              />
              {errors.password && <p className="text-red-500 text-xs mt-2">{errors.password}</p>}
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
            </div>

            <button 
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors"
              type="submit"
              disabled={processing}
            >
              {processing ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account? 
            <Link href="/sign_in" className="text-indigo-600 hover:text-indigo-500 font-medium"> Sign In</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;