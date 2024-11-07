import { useEffect, useState } from "react";
import axios from "axios";

const Timeline = () => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const getMyTimeline = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/timeline/getAll",
        { withCredentials: true }
      );
      setTimeline(data.timeline);
    };
    getMyTimeline();
  }, []);
  return (
    <>
      <div>
        <h1 className="overflow-x-hidden font-extrabold text-[1.8rem] md:text-[2.2rem] lg:text-[2.8rem] mb-4 -mt-14">
          Timeline
        </h1>

        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {timeline && timeline.length > 0 ? (
            timeline.map((element) => {
              return (
                <li key={element._id} className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg
                      className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </span>
                  <h3 className="mb-1 ml-2 text-lg sm:text-xl  font-semibold text-gray-900 dark:text-white">
                    {element.title}
                  </h3>
                  <time className="block ml-4 mb-2 text-sm sm:text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
                    {element.timeline.from} -{" "}
                    {element.timeline.to ? element.timeline.from : "Present"}
                  </time>
                  <p className="text-sm sm:text-lg ml-4  text-gray-500 dark:text-gray-400">
                    {element.description}
                  </p>
                </li>
              );
            })
          ) : (
            <div className="text-xl grid flex-col items-center">
              Please add your Timeline first
            </div>
          )}
        </ol>
        {/* <hr className="my-8 border-2 border-yellow-500 md:my-10" /> */}
      </div>
    </>
  );
};

export default Timeline;
