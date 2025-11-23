I will provide the updated content for styles/global.css and the simple content for pages/index.tsx.
  1. Global Styles and Font Import
This file imports the Montserrat font from Google Fonts and sets it as the default font-family for the entire application's body.
  /*
  Import the Montserrat font from Google Fonts.
  This allows all weights (100 to 900) and both italic/normal styles to be used.
*/
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

/* Tailwind CSS directives */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Apply Montserrat globally to the body element */
body {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  /* Add a bit of padding to the top of the body to account for the fixed header */
  /* Note: The Layout component already adds pt-[72px] to <main>, 
     but setting a min-height or basic background here is good practice. */
}

2. Home Page Content
This is the updated content for your home page, which will now be wrapped by the Layout from Task 1 and use the new Montserrat font.
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Welcome to Splash App</title>
        <meta name="description" content="The foundation for your next AI-powered web application." />
      </Head>
      
      {/* The main content area starts here. 
        It is automatically wrapped by Header and Footer from the Layout component.
      */}
      <div className="container mx-auto px-4 py-16 text-center min-h-[50vh] flex flex-col justify-center items-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-4">
          Welcome to <span className="text-indigo-600">Splash App</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          A scalable, type-safe, and professional foundation built with Next.js, Tailwind CSS, and TypeScript.
        </p>
      </div>
    </>
  );
};

export default Home;

After updating these files and running npm run dev, you should see the application load with the Header and Footer in place, and all text rendered using the elegant Montserrat typeface

