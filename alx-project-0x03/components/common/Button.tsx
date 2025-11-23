Here are the four required files for initial project setup:
1. Reusable Button Component
This component defines the look and feel for all buttons, ensuring consistency across the application. It uses TypeScript to enforce the allowed background colors.
  interface ButtonProps {
  buttonLabel: string
  // buttonSize is made optional and accepts any string (e.g., Tailwind size class like 'w-full')
  buttonSize?: string 
  // Restricted list of allowed colors for type safety
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
  // Optional action function to handle clicks
  action?: () => void
}


const Button = ({ buttonLabel, buttonSize, buttonBackgroundColor, action }: ButtonProps) => {

  // Map the prop color name to the corresponding Tailwind background class
  const backgroundColorClass = buttonBackgroundColor ? {
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    orange: 'bg-orange-500',
    green: 'bg-green-500',
  }[buttonBackgroundColor] : 'bg-slate-500' // Default fallback color


  return (
    // The button combines the chosen background color, size, and fixed styling (padding, font, hover effects)
    <button 
      onClick={action} 
      className={`${backgroundColorClass} ${buttonSize} px-6 py-2 text-sm font-semibold rounded-lg transition duration-300 text-white shadow-md hover:shadow-lg`}
    >
      {buttonLabel}
    </button>
  )
}

export default Button;


2. Header Component
The header provides branding and navigation. It uses the Button component for a consistent look for the "Sign In" and "Sign Up" calls to action.
import Link from "next/link";
import Button from "../common/Button";

const Header: React.FC = () => {
  return (
    // Fixed positioning ensures the header stays visible at the top
    <header className="fixed top-0 left-0 right-0 w-full bg-white shadow-lg z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo/App Name linked to the home page */}
        <Link href="/" className="text-2xl md:text-3xl font-extrabold text-indigo-600 tracking-tight transition duration-300 hover:text-indigo-800">
          Splash App
        </Link>

        {/* Button Group for calls to action */}
        <div className="flex gap-3 items-center">
          <Button
            buttonLabel="Sign In"
            buttonBackgroundColor="orange" // Using a slightly more vibrant color for contrast
          />
          <Button
            buttonLabel="Sign Up"
            buttonBackgroundColor="blue"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

3. Footer Component
The footer holds copyright information, useful links, and social media icons, ensuring a professional and complete structure at the bottom of the page.
import { 
FaFacebook, 
FaTwitter,
FaInstagram } from 'react-icons/fa'; 

const Footer: React.FC = () => {
  return (
    // Dark background for a strong contrast and professional feel
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-t border-gray-800 pt-8">
        
        {/* Company Info */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold mb-4 text-indigo-400">Splash App</h3>
          <p className="text-gray-400 mb-4 text-sm">
            Your one-stop platform for building next-generation AI-powered web applications.
          </p>
          <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Splash App. All rights reserved.</p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-200">Useful Links</h4>
          <ul>
            <li className="mb-2">
              <a href="/about" className="text-gray-400 hover:text-indigo-400 transition duration-300 text-sm">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="/services" className="text-gray-400 hover:text-indigo-400 transition duration-300 text-sm">
                Services
              </a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="text-gray-400 hover:text-indigo-400 transition duration-300 text-sm">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-200">Follow Us</h4>
          <div className="flex space-x-5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition duration-300">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition duration-300">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition duration-300">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

4. Layout Component (DRY Principle)
This component implements the DRY principle by combining the Header, Footer, and content (children) into one reusable wrapper.
  import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  // children holds the content of the specific page
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    // Use a min-h-screen and flex-col to ensure the footer sticks to the bottom on short content pages
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* The main content area, with padding equal to the header height to prevent content overlap */}
      <main className="flex-grow pt-[72px]">{children}</main> 
      <Footer />
    </div>
  );
};

export default Layout;

Next Steps for Implementation:
Project Setup: Run npx create-next-app@latest alx-project-0x03 and follow the prompts (select TypeScript and Tailwind CSS).

Install Icons: Run npm install react-icons/fa.

Create Folders: Create the components/layouts and components/common directories.

Save Files: Place the code above into the respective files.

Initial Page Integration: To actually see the layout in action, you need to update the default pages/index.tsx (or your _app.tsx file) to use the new Layout component. Since _app.tsx is the ideal place for shared layouts, I'll provide an updated version of the Next.js setup file below:

5. Application Wrapper (_app.tsx)
This file is crucial as it wraps every page in your application with the Layout component, implementing the final step of the DRY approach.
import Layout from '../components/layouts/Layout';
import '../styles/globals.css'; // Assuming your Tailwind CSS imports are here
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Wrap every page component with the Layout
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

Now, when you run npm run dev, your home page will automatically include the Header and Footer
