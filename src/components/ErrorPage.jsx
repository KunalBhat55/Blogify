function ErrorPage() {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-400">404</h1>
        <p className="mt-4 text-2xl font-semibold text-gray-600">
          Oops! Page not found
        </p>
        <p className="mt-2 text-gray-500">
          The page you are looking for might be in another galaxy.
        </p>
        <a
          href="/home"
          className="mt-4 inline-block px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}

export default ErrorPage;
