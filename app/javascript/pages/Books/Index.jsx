import { Link } from '@inertiajs/react'
import DashboardHeader from "../Dashboard/Components/DashBoardHeader"
import BooksTable from "./components/BooksTable"

function BooksIndex(){
  return (
    <>
      <DashboardHeader />
      <div className="w-96 mx-auto mt-3 mb-5">
        <span
          className="inline-flex divide-x divide-gray-300 overflow-hidden rounded border border-gray-300 bg-white shadow-sm"
        >
          <button
            type="button"
            className="px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative"
          >
            Best Sellers
          </button>
          <Link
            href="/books/new"
            className="px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative"
          >
            Add Book
          </Link>

          <button
            type="button"
            className="px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative"
          >
            Add Author
          </button>

          <button
            type="button"
            className="px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative"
          >
            Add Publisher
          </button>

          <button
            type="button"
            className="px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative"
          >
            Add Category
          </button>
        </span>
      </div>
      <div className="px-5">
        <BooksTable />
      </div>
    </>
  )
}

export default BooksIndex;