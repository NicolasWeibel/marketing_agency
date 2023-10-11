import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo_boomslag from "assets/images/boomslag-black.png";

function Navbar() {
  return (
    <nav className="w-full py-6 top-0 transition duration-300 ease-in-out z-40 fixed">
      <div className="bg-white px-4 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
          <div className="ml-4 mt-2">
            <img src={logo_boomslag} width={140} alt="Logo" />
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
            <Link
              to="/cases"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4"
            >
              Cases
            </Link>
            <Link
              to="/services"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4"
            >
              Services
            </Link>
            <Link
              to="/about-us"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4"
            >
              About Us
            </Link>
            <Link
              to="/careers"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4"
            >
              Careers
            </Link>
            <Link
              to="/blog"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4"
            >
              Contact
            </Link>
            <button
              type="button"
              className="inline-flex ml-12 items-center rounded-md border border-transparent bg-orange-button px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Hire us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Navbar);
