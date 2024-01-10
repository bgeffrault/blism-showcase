import LinkedIn from "../shared/icons/linkedIn";
import { Email } from "./email";



export default function Footer() {



  return (
    <footer className="absolute w-full py-5 text-center">
      <Email />
      <a
        href="https://www.linkedin.com/in/bgeffrault/"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto mt-2 flex max-w-fit items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-6 py-2 transition-all duration-75 hover:scale-105"
      >
        <LinkedIn className="h-6 w-6" />
        <p className="font-medium text-gray-600">Contactez moi</p>
      </a>
    </footer>
  );
}
