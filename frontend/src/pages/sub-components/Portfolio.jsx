import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  const [viewAll, setViewAll] = useState(false);

  useEffect(() => {
    const getMyProjects = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/project/getAll",
        { withCredentials: true }
      );
      setProjects(data.projects);
    };
    getMyProjects();
  }, []);
  return (
    <>
      <div>
        <div className="relative mb-12">
          <h1
            className="hidden sm:flex font-extrabold text-tubeLight-effect dancing_text gap-4 items-center text-[1.8rem] sm:text-[2.6rem] 
        md:text-[3.2rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] tracking-[16px] mx-auto w-fit mb-4"
            style={{ background: "hsl(222.2 84% 4.9%)" }}
          >
            MY
            <span className="text-tubeLight-effect font-extrabold">
              PROJECTS
            </span>
          </h1>
          <h1
            className="flex sm:hidden font-extrabold text-tubeLight-effect dancing_text gap-4 items-center text-[1.8rem] sm:text-[2.6rem] 
        md:text-[3.2rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] tracking-[16px] mx-auto w-fit mb-4"
            style={{ background: "hsl(222.2 84% 4.9%)" }}
          >
            MY
            <span className="text-tubeLight-effect font-extrabold">Work</span>
          </h1>
          <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-14 z-[-1] bg-slate-200"></span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {viewAll
            ? projects &&
              projects.map((element) => {
                return (
                  <Link key={element._id} to={`/project/${element._id}`}>
                    <img
                      src={element.projectBanner && element.projectBanner.url}
                      alt={element.projectBanner}
                      className="h-[100%] w-[100%]"
                    />
                  </Link>
                );
              })
            : projects &&
              projects.slice(0, 6).map((element) => {
                return (
                  <Link key={element._id} to={`/project/${element._id}`}>
                    <img
                      src={element.projectBanner && element.projectBanner.url}
                      alt={element.projectBanner}
                    />
                  </Link>
                );
              })}
        </div>

        {projects && projects.length > 6 && (
          <div className="w-full text-center my-9">
            <Button className="w-52" onClick={() => setViewAll(!viewAll)}>
              {viewAll ? "Show Less" : "Show More"}
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Portfolio;
