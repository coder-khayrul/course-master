import { Link, useLocation } from "react-router";

const breadcrumbNameMap = {
  "/": "Home",
  "/courses": "Courses",
};

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="text-sm text-gray-600">
      <ol className="flex items-center gap-2">
        <li>
          <Link to="/" className="hover:underline text-two">
            Home
          </Link>
        </li>

        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="flex items-center gap-2 text-white">
              <span>/</span>
              {isLast ? (
                <span className="text-white font-medium">
                  {breadcrumbNameMap[to] || value}
                </span>
              ) : (
                <Link to={to} className="hover:underline">
                  {breadcrumbNameMap[to] || value}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
