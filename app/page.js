'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from './slider';
import Footer from './Footer';


export default function Home() {
  const [randomCats, setRandomCats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);


  const fetchRandomCats = async () => {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=9');
      setRandomCats(response.data);
    } catch (error) {
      setIsError(true);
      console.error('Error fetching random cats:', error);
    } finally {
      setIsLoading(false);
    }
  };



  useEffect(() => {
    fetchRandomCats();
  }, []); // Fetch on mount

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <img
        src='https://t4.ftcdn.net/jpg/02/23/38/69/240_F_223386944_ChB3xmyF6C3JANIiNmdmV8pZ8rMqeUug.jpg'
        alt='Logo'
        style={{
          width: '100px',  
          height: 'auto', 
          position: 'fixed',
          top: '5px',     
          left: '10px'      
        }}
      />
      <Slider randomCats={randomCats} isLoading={isLoading} isError={isError} />

      <div className="text-center p-10">


      </div>

      <div className="text-center p-10">
      <h1 className="font-bold text-4xl mb-4">Cat Information</h1>
      </div>

      <div class="flex w-full md:max-w-xl mx-4 rounded shadow">
        <a href="#" aria-current="false"
          class="w-full flex justify-center font-medium rounded-l px-5 py-2 border bg-white text-gray-800 border-gray-200 hover:bg-gray-100">
          Meow
        </a>

        <a href="#" aria-current="page"
          class="w-full flex justify-center font-medium px-5 py-2 border-t border-b bg-gray-900 text-white  border-gray-900 hover:bg-gray-800">
          Pet
        </a>

        <a href="#" aria-current="false"
          class="w-full flex items-center gap-x-2 justify-center font-medium rounded-r px-5 py-2 border bg-white text-gray-800 border-gray-200 hover:bg-gray-100">
          Trending
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z">
            </path>
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z">
            </path>
          </svg>
        </a>
      </div>
   
      <div className="text-center p-10">
        
        <section className="w-fit mx-auto grid grid-cols-3 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
          {isLoading ? (
            <p>Loading...</p>
          ) : isError ? (
            <p>Error loading cat data</p>
          ) : (
            randomCats.map((cat, index) => (
              <div key={index} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <img
                  src={cat.url}
                  alt={`Cat ${index + 1}`}
                  className="h-80 w-72 object-cover rounded-t-xl"
                />
              
              </div>
            ))
          )}
        </section>
      </div>
      <section class="bg-black overflow-visible my-0 py-24 mt-24 w-full">
        <div class="text-white items-center text-center flex flex-col">
          <h2 class="font-bold text-2xl lg:text-4xl">Discover the Purr-fect Adventure for Your Feline Friend</h2>
          <p class="mx-auto mt-6 max-w-xl text-lg md:text-xl leading-8 text-slate-400">
          Embark on a cat-centric journey, book a demo, and explore endless possibilities for your feline friend.
          </p>
          <a class="mt-8 rounded-md bg-white px-5 py-2.5 text-base font-semibold leading-7 text-black hover:bg-gray-200 transition focus:outline-none focus:ring focus:border-blue-300"
            href="#">Claim Your Exclusive 15% off on Cat Essentials! Start Meow</a>
        </div>
      </section>
      <div className="footer" style={{ marginTop: '50px' }}>
        <Footer />
      </div>

    </main>


  );
}
