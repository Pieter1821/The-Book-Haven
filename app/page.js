
import Navbar from './components/Navbar';
import BooksCarousel from './components/BooksCarousel';
import Hero from './components/Hero'

import Link from 'next/link';



export default function Home() {
  return (
    <div className="Container">
      <Navbar />
      <Hero/>
      <BooksCarousel/>
      <div />
    </div>
  );
}
