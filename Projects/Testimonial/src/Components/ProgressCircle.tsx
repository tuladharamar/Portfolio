type Percentage={
    percentage:number;
}

const ProgressCircle = ({percentage}:Percentage) => {
    const radius = 90;
    const circumference = 2 * Math.PI * radius;

    const offset = circumference - (percentage/100) * circumference;

  return (
    <div className="text-center">
      <div className="relative w-55 h-55">
        <svg
          className="rotate-90"
          width="220"
          height="220"
        >
          <circle
            cx="110"
            cy="110"
            r={radius}
            stroke="#d1d5db"
            strokeWidth="10"
            fill="none"
          />

          <circle
            cx="110"
            cy="110"
            r={radius}
            stroke="black"
            strokeWidth="10"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold">
          {percentage}%
        </div>
      </div>

      <h2 className="text-4xl mt-4 font-medium">
        Profile Completeness
      </h2>
    </div>
  )
}

export default ProgressCircle