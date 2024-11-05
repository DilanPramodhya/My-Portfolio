import { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getMyProfile = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/user/portfolio/me",
        { withCredentials: true }
      );
      setUser(data.user);
    };
    getMyProfile();
  }, []);
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <div className="relative">
        <h1
          className="flex font-extrabold gap-4 items-center text-[1.8rem] sm:text-[2.6rem] 
        md:text-[3.2rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] tracking-[16px] mx-auto w-fit mb-4"
          style={{ background: "hsl(222.2 84% 4.9%)" }}
        >
          ABOUT
          <span className="text-tubeLight-effect font-extrabold">ME</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-14 z-[-1] bg-slate-200"></span>
      </div>
      <div>
        <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14">
          <div className="flex justify-center items-center">
            <img
              src={user.avatar && user.avatar.url}
              alt={user.fullName}
              className="bg-white p-2 sm:p-4 rotate-[10deg] h-[240px] sm:h-[340px] md:h-[350px] lg:h-[500px]"
            />
          </div>
          <div className="flex justify-center flex-col tracking-[1px] text-xl gap-5">
            <p>
              I am a trainee MERN Stack developer. I graduated in Software
              Engineering from SLIATE around 2024. I work as a full stack
              developer in doing some freelance projects
            </p>
            <p>
              I also like Traveling, Music & Video Games etc. I am developing
              web application in my free time.
            </p>
          </div>
        </div>
        <p className="tracking-[1px] text-xl">
          My dedication and perseverance in timely delivery of work are integral
          to me. I maintain the courage to face any challengers for extended
          periods.
        </p>
      </div>
    </div>
  );
};

export default About;
