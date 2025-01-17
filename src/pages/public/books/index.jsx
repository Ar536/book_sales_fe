import { useEffect, useState } from "react";
import ProductList from "../../../components/shared/ProductList";
import { getBooks } from "../../../services/books";
import { getGenres } from "../../../services/genre";

export default function Books() {
    //useState
    const [books, setBooks] = useState([]);
    const [genres, setGenres] = useState([]);

    //useEffect

    useEffect(() => {
        const fetchData = async () => {
            const [booksData, genresData] = await Promise.all([getBooks(),getGenres(),]);

            setBooks(booksData)
            setGenres(genresData)
        };

        fetchData()
    }, []);

    // console.log(books);
    //fungsi untuk mendapatkan nama genre berdasrkan genre_id
    const bookGenre = books?.map((book) => {
        return {
            ...book,
            genre: genres.find((genre) => genre.id === book.genre_id),
        };
    });

    return <ProductList datas={bookGenre} />;
}
