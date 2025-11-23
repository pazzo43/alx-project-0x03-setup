1. Create the 404 Page File

Inside your pages/ directory, create:
pages/404.tsx

This file name is special — Next.js automatically uses it as the custom error page when a route is not found.
  2. Paste the Provided Code Into pages/404.tsx

Here is the exact code to place in the file:
import Link from 'next/link';
import { FaHome } from 'react-icons/fa'; 

const Custom404 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col justify-center items-center text-white">
      {/* Main Heading */}
      <h1 className="text-6xl font-bold mb-4">Oops! 😱</h1>
      <p className="text-2xl mb-8">
        We can't seem to find the page you're looking for.
      </p>

      {/* Funny Message */}
      <p className="text-lg mb-8 text-center max-w-md">
        Maybe it was abducted by aliens 👽, or it just took a wrong turn into the Internet wilderness! Either way, it's not here.
      </p>

      {/* Button to navigate back */}
      <Link
        href="/"
        className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
      >
        <FaHome size={20} />
        <span>Go Back Home</span>
      </Link>
    </div>
  );
}

export default Custom404;

3. Save and Close the File

Make sure the file is properly saved in:
  pages/404.tsx

4. Run Your Development Server

In your terminal:
npm run dev

This starts your Next.js app at:
http://localhost:3000

5. Test the Custom 404 Page

Now open your browser and go to a route that does not exist, such as:
  http://localhost:3000/something-wrong
http://localhost:3000/unknown-pathname
http://localhost:3000/random

Next.js will automatically detect that the route does not exist and will display your Custom404 component.
