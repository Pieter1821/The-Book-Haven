'use client'

import { createContext, useEffect, useState } from "react";

export const BookDataContext = createContext();
export const BookDataProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=id')
      .then(res => res.json())
      .then(data => {
        setBooks(data.items);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []); 

  return (
    <BookDataContext.Provider value={{ books, loading }}>
      {children}
    </BookDataContext.Provider>
  );
};
