import Header from "./Header";
import nproughImg from "../assets/profile.jpg";
import { TypeAnimation } from "react-type-animation";

const HomeSection = () => {
  return (
    <section className="h-screen snap-start bg-gradient-to-b from-slate-900 to-slate-700 ease-linear">
      <Header />
      <div className="h-[calc(100vh-100px)] content-center w-full relative">
        <div className="flex flex-col align-middle justify-center">
          <div className="ml-[10vw]">
            <h1 className="text-6xl text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-to-b from-violet-500 to-blue-500 ease-linear text-transparent bg-clip-text font-bold">
                Nick
              </span>
            </h1>
            <p className="text-7xl text-white py-10">
              I'm a <br />
              <TypeAnimation
                className="bg-gradient-to-b from-violet-500 to-blue-500 ease-linear text-transparent bg-clip-text font-bold py-3"
                sequence={[
                  "Software Engineer", // Types 'One'
                  1000, // Waits 1s
                  "React Developer", // Deletes 'One' and types 'Two'
                  1000, // Waits 2s
                  "Full-Stack Developer", // Types 'Three' without deleting 'Two'
                  1000,
                  "Web Designer",
                  1000,
                  () => {},
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "inherit", display: "inline-block" }}
              />
            </p>
          </div>
          <img
            className="flex rounded-full h-[30vh] w-[30vh] m-auto my-10 lg:m-0 lg:absolute lg:right-[10vw]"
            src={nproughImg}
            alt="Nicholas Prough"
          />
        </div>
        <svg
          className="m-auto absolute bottom-10 left-0 right-0"
          fill="white"
          height="60"
          stroke="none"
          viewBox="0 0 48 48"
          width="60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 20l10 10 10-10z" />
          <path d="M0 0h48v48h-48z" fill="none" />
        </svg>
      </div>
    </section>
  );
};

export default HomeSection;
