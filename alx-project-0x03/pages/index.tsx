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

It's time to implement imperative routing in pages/index.tsx file. This uses the useRouter hook to programmatically navigate users when they click your custom Button components.

I will update the pages/index.tsx file with the required code.

  import Button from "../components/common/Button";
import { useRouter } from "next/router";
import Head from 'next/head'; // Keep Head for SEO purposes

interface PageRouteProps {
  pageRoute: string
}

const Home = () => {
  const router = useRouter()

  // Imeperative routing with useRouter
  // This function programmatically navigates the user to the specified path
  const routeToNextPage  = ({ pageRoute }: PageRouteProps) => {
    // router.push() handles the navigation
    router.push(pageRoute, undefined, { shallow: false}) 
  }

  return (
    <>
      <Head>
        <title>Splash App - AI Foundation</title>
      </Head>
      
      {/* Container for the main hero section */}
      <div className="container mx-auto px-4 py-32 md:py-40 text-center min-h-[70vh] flex flex-col justify-center items-center">
        
        {/* Welcome Message */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-4">
          Welcome to <span className="text-indigo-600">Splash App!</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          Your one-stop platform for next-generation AI features. Start exploring our tools below and experience scalable, type-safe development.
        </p>

        {/* Navigation Options using the reusable Button component */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Button 
            action={() => routeToNextPage({ pageRoute: '/generate-text-ai' })} 
            buttonLabel="Generate Text (AI)" 
            buttonBackgroundColor="blue" 
          />
          <Button 
            action={() => routeToNextPage({ pageRoute: '/text-to-image'})} 
            buttonLabel="Text to Image (AI)" 
            buttonBackgroundColor="green" 
          />
          <Button 
            action={() => routeToNextPage({ pageRoute: '/counter-app'})} 
            buttonLabel="Simple Counter App" 
            buttonBackgroundColor="orange" 
          />
        </div>
        
        {/* Note on 404 Pages */}
        <p className="mt-16 text-sm text-gray-500 italic">
          (Note: These pages do not exist yet, so clicking them will currently lead to a 404 error page.)
        </p>
      </div>
    </>
  );
}

export default Home;

Home Page Content (pages/index.tsx)
This updated file removes the static Head content (as it's better placed inside the Home function or kept simple), imports useRouter, and defines the routeToNextPage function which handles navigation when the buttons are clicked.

When you run the application and click any of the new buttons, you will notice three key things:

Navigation: The URL in the browser changes to the specified path (e.g., /generate-text-ai).

404 Page: You land on the default Next.js "404 - This page could not be found." page because those routes haven't been created yet.

Shared Layout Persistence: Despite being a 404 page, the content is still wrapped by your Header and Footer, proving that the Layout component setup in _app.tsx is working correctly!

1. Create the directory structure

Inside your project (root):
alx-project-0x03/
│
├── interfaces/     ←  Create this
│   └── index.ts    ←  Empty file for now

To create it:

If using VS Code or file explorer:

Create folder: interfaces

Inside it: create file index.ts

If using terminal:
mkdir interfaces
touch interfaces/index.ts

2. Extract Interfaces from Your Files

You must locate any interfaces inside these files:

pages/index.tsx

components/common/Button.tsx

components/layouts/Layout.tsx

Then move each interface to interfaces/index.ts and export them.

3. Example of What You Will Move

Below is the general pattern.
Your actual file may look slightly different, but the structure will be the same.

 Example: Interface inside Button.tsx

You may have something like:

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

Remove it from the file and paste it into:

interfaces/index.ts
export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

Example: Interface from Layout.tsx

You might have something like:
interface LayoutProps {
  children: React.ReactNode;
}

Move it to interfaces/index.ts:
export interface LayoutProps {
  children: React.ReactNode;
}

Example: Interface from pages/index.tsx

Maybe something like:
interface HomeProps {
  title: string;
}

Move it too:
export interface HomeProps {
  title: string;
}

. Import the Interfaces Back into Each File
Example: Button.tsx

Replace the deleted interface with:
import { ButtonProps } from "@/interfaces";

Example: Layout.tsx
import { LayoutProps } from "@/interfaces";

Example: pages/index.tsx
import { HomeProps } from "@/interfaces";

5. What Your interfaces/index.ts Should Look Like

A combined example:
export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface HomeProps {
  title: string;
}

This file will grow as your app grows.
  6. Run Your App

In the terminal:
npm run dev

Then go to:

http://localhost:3000

app should run exactly the same, because I only reorganized code — not changed logic.

