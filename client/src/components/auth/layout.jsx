import { Outlet } from "react-router-dom";
import sunderbannLogo from "../../assets/sunderbann.png"; // Import logo for the layout

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full bg-green-400">
      {/* Left Section: Logo and Welcome Message */}
      <div className="hidden lg:flex flex-col items-center justify-center bg-green-900 w-1/2 px-12 text-white">
        <img
          src={sunderbannLogo}
          alt="Sunderbann Logo"
          className="w-32 h-32 mb-8"
        />
        <div className="max-w-md space-y-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Welcome to Sunderbann Book Shop
          </h1>
          <p className="text-lg text-gray-300">
            Discover the joy of reading with our wide collection of books.
          </p>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8 bg-green-300">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;