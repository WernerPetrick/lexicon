import Header from "./components/Header"
import Footer from "./components/Footer"
import StockedShelves from "../assets/stocked-bookshelf.png"

function About(){
  return (
    <>
      <Header />
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="space-y-4 md:space-y-8">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                About Lexicon.
              </h2>

              <p className="mt-4 text-gray-700">
                At Lexicon, we believe managing a bookstore should be as enjoyable as reading a great book. That’s why we built a platform designed to simplify and streamline inventory, sales, and operations for bookstores of every size. Whether you run a single shop or manage multiple locations, our tools help you stay organized, keep your shelves stocked, and deliver a better experience for your customers. We’re passionate about supporting independent and chain bookstores alike — giving you the modern tools you need to thrive in a fast-paced retail world.
              </p>
            </div>

            <img
              src={StockedShelves}
              className="rounded"
              alt=""
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About