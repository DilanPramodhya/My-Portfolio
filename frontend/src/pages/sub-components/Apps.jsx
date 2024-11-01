import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../../components/ui/card";

const Apps = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const getMySkills = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/softwareApplication/getAll",
        { withCredentials: true }
      );
      setApplications(data.softwareApplications);
    };
    getMySkills();
  }, []);
  return (
    <div className="w-full flex flex-col gap-8 sm:gap-12">
      <h1 className="overflow-x-hidden font-extrabold text-[1.8rem] sm:text-[2.2rem] md:text-[3.0rem] lg:text-[4.0rem] tracking-[12px] mb-4 mx-auto text-tubeLight-effect dancing_text">
        My Apps
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {applications && applications.length > 0 ? (
          applications.map((element) => {
            return (
              <Card
                key={element._id}
                className="h-fit p-7 flex flex-col justify-center items-center gap-3"
              >
                <img
                  src={element.svg && element.svg.url}
                  alt={element.title}
                  className="h-12 sm:h-24 w-auto"
                />

                <p className="text-muted-foreground text-center">
                  {element.name}
                </p>
              </Card>
            );
          })
        ) : (
          <div className="text-xl grid flex-col items-center">
            Please add your Applications first
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
