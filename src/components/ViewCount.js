"use client";
import React from "react";

const ViewCount = () => {
  const [visits, setVisits] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  function addSuffix(visits) {
    // Cast visits to a number
    const number = Number(visits);
    const suffixes = ["th", "st", "nd", "rd"];
    const value = number % 100;

    // Check last two digits to cover special cases like 11th, 12th, 13th
    const suffix =
      value >= 11 && value <= 13
        ? suffixes[0]
        : suffixes[value % 10 > 3 ? 0 : value % 10];

    return `${number}${suffix}`;
  }
  React.useEffect(() => {
    async function fetchVisits() {
      setLoading(true);
      const response = await fetch("/api/visits");
      const data = await response.json();
      if (data) {
        setLoading(false);
      }
      setVisits(data.count);
    }
    fetchVisits();
  }, []);
  return (
    <div className="rounded-md boxShadow bg-[#f5f5f5] px-5 py-3 flex gap-4 items-center">
      <h5 className="text-base flex items-center gap-2">
        {" "}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M12 7C12.5523 7 13 7.44772 13 8V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V8C11 7.44772 11.4477 7 12 7Z"
              fill="#000000"
            ></path>{" "}
            <path
              d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z"
              fill="#000000"
            ></path>{" "}
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7ZM4 7C4 5.34315 5.34315 4 7 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7Z"
              fill="#000000"
            ></path>{" "}
          </g>
        </svg>
        {loading
          ? "Fetching visits..."
          : `You're the ${addSuffix(visits)} visitor`}
      </h5>
    </div>
  );
};

export default ViewCount;
