import BIM from "../../assets/book-inventory-management.png"

function InventoryManagementSection(){
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <img
              src={BIM}
              className="rounded"
              alt=""
            />
          </div>
          <div>
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Book Inventory Management.
              </h2>
    
              <p className="mt-4 text-gray-700">
                Seamlessly manage your entire catalog across multiple stores with powerful inventory tools. Easily add, edit, or remove books while tracking key details like title, author, ISBN, edition, genre, language, and publisher. Monitor real-time stock levels for each store, transfer inventory between locations, and speed up operations with built-in barcode scanning support. Stay organized, reduce errors, and keep your shelves stocked with exactly what your customers are looking for — all from one intuitive dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InventoryManagementSection