const Footer = () => {
  return (
    <div className="grid">
      <footer 
      className="py-5 px-4 text-white grid md:grid-cols-4 grid-cols-2 gap-x-2">
        <div className="flex flex-col items-center mx-1 p-3 mb-4 sm:mb-0">
          <h4 className="text-2xl font-bold mb-2">Company</h4>
          <ul className="list-unstyled space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Why Envelope
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Press
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center mb-4 mr-6 p-3 sm:mb-0">
          <h4 className="text-2xl font-bold mb-2 mr-2">Product</h4>
          <ul className="list-unstyled space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                How It Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Use Cases
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col m-1 p-3 items-center mb-4 sm:mb-0">
          <h4 className="text-2xl text-right font-bold mb-2 ml-5">Resources</h4>
          <ul className="list-unstyled space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Partnerships
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Media Assets
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col m-1 p-3 items-center mb-4 sm:mb-0">
          <h4 className="text-2xl font-bold mb-2 mr-14">Legal</h4>
          <ul className="list-unstyled space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Offer Terms
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="flex flex-col m-1 p-3 items-center">
          <h4 className="text-2xl font-bold mb-2">Stay Up to Date</h4>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-sm text-center">
            &copy; 2024 Kunal Bhat, All rights reserved.
          </p>
        </div> */}
      </footer>
    </div>
  );
};

export default Footer;
