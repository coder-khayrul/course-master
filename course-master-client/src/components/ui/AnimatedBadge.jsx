const AnimatedBadge = ({ children, className = "", ...props }) => {


  return (
    <div
      className={`inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-full backdrop-blur-md bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-gradient-x ${className}`}
      style={{
        background:
          "linear-gradient(-45deg, #5740E7, hsl(280 70% 60%), #5740E7,hsl(280 70% 60%))",
        backgroundSize: "400% 400%",
        animation: "gradient 3s ease infinite",
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedBadge;
