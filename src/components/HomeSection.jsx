import Header from "./Header";
import nproughImg from "../assets/profile.jpg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HomeSection = () => {
  const imgVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 1,
        repeat: 0,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        repeat: 0,
      },
    },
  };
  const textVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 1,
        repeat: 0,
        staggerChildren: 0.5,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        repeat: 0,
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <section className="h-screen snap-start bg-gradient-to-b from-slate-900 to-slate-700 ease-linear overflow-hidden">
      <Header />
      <div className="h-[calc(100vh-100px)] content-center w-full relative">
        <div className="flex flex-col align-middle justify-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            className="ml-[10vw] py-10"
          >
            <motion.h1 variants={textVariants} className="text-5xl text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-to-b from-violet-500 to-blue-500 ease-linear text-transparent bg-clip-text font-bold">
                Nick
              </span>
            </motion.h1>
            <motion.p
              variants={textVariants}
              className="text-7xl text-white py-2 h-[300px] lg:h-auto"
            >
              I'm a <br />
              <TypeAnimation
                className="bg-gradient-to-b from-violet-500 to-blue-500 ease-linear text-transparent bg-clip-text font-bold py-7"
                sequence={[
                  "Software Engineer", // Types 'One'
                  1000, // Waits 1s
                  "React Developer", // Deletes 'One' and types 'Two'
                  1000, // Waits 2s
                  "Full-Stack Developer", // Types 'Three' without deleting 'Two'
                  1000,
                  "Web Designer",
                  1000,
                  "Business Owner",
                  1000,
                  () => {},
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "inherit", display: "inline-block" }}
              />
            </motion.p>
          </motion.div>
          <motion.img
            initial="hidden"
            animate={{ y: -5, scale: 1 }}
            whileInView="visible"
            variants={imgVariants}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 1,
              ease: "easeInOut",
            }}
            className="flex rounded-full w-[50vw] h-[50vw] lg:w-[450px] lg:h-[450px] m-auto 2xl:absolute right-[15vw] shadow-2xl"
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
