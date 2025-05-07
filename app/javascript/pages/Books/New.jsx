import { Inertia } from '@inertiajs/inertia';
import { useState } from 'react';
import DashboardHeader from "../Dashboard/Components/DashBoardHeader";

function NewBook({authors, publishers}) {
  const [form, setForm] = useState({
    title: "",
    author_id: "",
    publisher_id: "",
    category: "",
    isbn: "",
    price: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Inertia.post('/books', { book: form });
  };

  return (
    <>
      <DashboardHeader />
      <div className="max-w-md mx-auto mt-5 p-5 border rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Add a New Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm mb-1">Title</label>
            <input id="title" type="text" name="title" value={form.title} onChange={handleChange} className="w-full border rounded p-2" required />
          </div>

          <div className="mb-4">
            <label htmlFor="isbn" className="block text-sm mb-1">Title</label>
            <input id="isbn" type="text" name="isbn" value={form.title} onChange={handleChange} className="w-full border rounded p-2" required />
          </div>

          <div className="mb-4">
            <select
              name="author_id"
              value={form.author_id}
              onChange={handleChange}
              className="w-full border rounded p-2"
            >
              <option value="">Select Author</option>
              {authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <select
              name="publisher_id"
              value={form.publisher}
              onChange={handleChange}
              className="w-full border rounded p-2"
            >
              <option value="">Select Publisher</option>
              {publishers.map((publisher) => (
                <option key={publisher.id} value={publisher.id}>
                  {publisher.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="category" className="block text-sm mb-1">Category</label>
            <input id="category" type="text" name="category" value={form.category} onChange={handleChange} className="w-full border rounded p-2" />
          </div>

          <button type="submit" className="bg-zinc-950 text-white px-4 py-2 rounded shadow hover:bg-zinc-700">
            Save Book
          </button>
        </form>
      </div>
    </>
  );
}

export default NewBook;
