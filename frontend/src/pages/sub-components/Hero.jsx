import axios from "axios";
import {
  ExternalLink,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "../../components/ui/button";

const Hero = () => {
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
    <div className="w-full">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-green-500 rounded-full h-3 w-3"></span>
        <p className="font-bold">Online</p>
      </div>
      <h1 className="overflow-x-hidden text-[1.8rem] sm:text-[2.2rem] md:text-[3.0rem] lg:text-[4.0rem] tracking-[4px] mb-4">
        Hey, I&apos;m {user.fullName}
      </h1>
      <h1 className="text-tubeLight-effect overflow-x-hidden text-[1.8rem] sm:text-[2.2rem] md:text-[3.0rem] lg:text-[4.0rem] tracking-[4px]">
        <Typewriter
          words={["MERN STACK DEVELOPER", "TRAINEE SOFTWARE ENGINEER"]}
          loop={100}
          cursor
          typeSpeed={70}
          deleteSpeed={70}
        />
      </h1>
      <div className="w-fit px-5 py-2 bg-slate-50 rounded-[20px] flex gap-5 items-center mt-4 md:mt-8 lg:mt-10">
        <Link to={user.linkedInURL} target="_blank">
          <Linkedin className="text-sky-600 w-7 h-7" />
        </Link>
        <Link to={user.githubURL} target="_blank">
          <Github className="text-stone-900 w-7 h-7" />
        </Link>
        <Link to={user.facebookURL} target="_blank">
          <Facebook className="text-blue-800 w-7 h-7" />
        </Link>
        <Link to={user.instagramURL} target="_blank">
          <Instagram className="text-pink-600 w-7 h-7" />
        </Link>
        <Link to={user.instagramURL} target="_blank">
          <Twitter className="text-blue-600 w-7 h-7" />
        </Link>
      </div>
      <div className="mt-4 md:mt-8 lg:mt-10 flex gap-3">
        <Link
          to={"https://github.com/DilanPramodhya/My-Portfolio"}
          target="_blank"
        >
          <Button className="rounded-[20px] flex items-center gap-2 flex-row">
            <span>
              <Github />
            </span>
            <span>GitHub</span>
          </Button>
        </Link>
        <Link to={user.resume && user.resume.url} target="_blank">
          <Button className="rounded-[20px] flex items-center gap-2 flex-row">
            <span>
              <ExternalLink />
            </span>
            <span>Resume</span>
          </Button>
        </Link>
      </div>
      <p className="mt-8 text-xl tracking-[2px]">{user.aboutMe}</p>
      <hr className="my-8 border-2 border-red-400 md:my-10" />
    </div>
  );
};

export default Hero;
