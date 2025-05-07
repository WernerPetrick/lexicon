class BooksController < ApplicationController
  def index
    render inertia: "Books/Index"
  end

  def new
    render inertia: "Books/New", props: {
      authors: Author.select(:id, :name),
      publishers: Publisher.select(:id, :name)
    }
  end

  def create
    @book = Book.new(book_params)
    if @book.save
      redirect_to books_path, notice: "Book successfully added."
    else
      render inertia: "Books/New", props: { errors: @book.errors.full_messages }
    end
  end

  private

  def book_params
    params.require(:book).permit(:title, :author_id, :publisher_id, :category, :isbn, :price, :cover_image)
  end
end
