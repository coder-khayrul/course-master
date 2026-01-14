export function StatsCard({
  title,
  value,
  icon: Icon,
  description,
  trend,
  className = "",
}) {
  return (
    <div className={`card bg-base-100 shadow ${className}`}>
      <div className="card-body p-6">
        <div className="flex items-center justify-between">
          {/* Text */}
          <div>
            <p className="text-sm font-medium text-base-content/70">
              {title}
            </p>

            <p className="text-2xl font-bold mt-1">
              {value}
            </p>

            {description && (
              <p className="text-xs text-base-content/60 mt-1">
                {description}
              </p>
            )}

            {trend && (
              <div className="flex items-center gap-1 mt-2">
                <span
                  className={`text-xs font-medium ${
                    trend.isPositive
                      ? "text-success"
                      : "text-error"
                  }`}
                >
                  {trend.isPositive ? "+" : "-"}
                  {Math.abs(trend.value)}%
                </span>
                <span className="text-xs text-base-content/60">
                  vs last month
                </span>
              </div>
            )}
          </div>

          {/* Icon */}
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
