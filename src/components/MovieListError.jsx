import { Link, useRouteError } from "react-router-dom";

function MovieListError() {
    const error = useRouteError();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-red-600">Error</h2>
                <p className="mt-4 text-lg text-gray-700">{error.message}</p>
                <Link to="/" className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    Go to Back
                </Link>
            </div>
        </div>
    );
}

export default MovieListError;
