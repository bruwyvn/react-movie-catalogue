import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-gray-100 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="text-2xl font-bold">
          Catálogo de Filmes
        </Link>

        <div className="flex items-center">
          <Link
            to="/register"
            className="bg-gray-600 text-gray-100 px-4 py-2 rounded-md ml-4 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Registrar
          </Link>
        </div>
      </div>
    </header>
  );
};


export default Header;
