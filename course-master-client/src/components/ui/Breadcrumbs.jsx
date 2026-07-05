import { Link, useLocation } from "react-router";
import { FiChevronRight as ChevronRight, FiHome as HomeIcon } from "react-icons/fi";

const breadcrumbNameMap = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
  "/courses": "Courses",
  "/login": "Login",
  "/register": "Register",
  "/dashboard": "Dashboard",
};

const formatLabel = (value) => {
  if (!value) return "Home";

  if (breadcrumbNameMap[`/${value}`]) {
    return breadcrumbNameMap[`/${value}`];
  }

  return value
    .split("-")
    .join(" ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

export default function Breadcrumbs({ type = "default" }) {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  const isSecondary = type === "secondary";

  const navClass = isSecondary
    ? "border border-slate-200 bg-white/90 shadow-sm"
    : "border border-white/15 bg-white/10 shadow-lg shadow-black/10 backdrop-blur-sm";

  const linkClass = isSecondary
    ? "text-slate-600 hover:text-primary"
    : "text-slate-300 hover:text-white";

  const currentClass = isSecondary ? "text-slate-900" : "text-white";
  const separatorClass = isSecondary ? "text-slate-400" : "text-slate-400";

  return (
    <nav aria-label="Breadcrumb" className={`w-fit rounded-full px-2 py-1 ${navClass}`}>
      <ol className="flex flex-wrap items-center gap-2 text-[12px] ">
        <li>
          <Link
            to="/"
            className={`inline-flex items-center gap-2 rounded-full px-2 py-1 transition ${linkClass}`}
          >
            <HomeIcon className="h-4 w-4" />
            <span>Home</span>
          </Link>
        </li>

        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const label = formatLabel(value);

          return (
            <li key={to} className="flex items-center gap-2">
              <ChevronRight className={`h-4 w-4 ${separatorClass}`} />
              {isLast ? (
                <span className={`rounded-full px-2.5 py-1 font-semibold ${currentClass}`}>
                  {label}
                </span>
              ) : (
                <Link to={to} className={`rounded-full px-2 py-1 transition ${linkClass}`}>
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
