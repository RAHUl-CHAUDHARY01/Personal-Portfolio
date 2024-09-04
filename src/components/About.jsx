import profileImg from "../images/rahulpp.jpg";
import Particle from "./Particle";
export default function About() {
  return (
    <>
    <Particle/>
      <div
        id="about-section"
        className="about-section-container flex gap-5 justify-between  py-20 bg-slate-900"
        style={{ zIndex: 100, position: "relative",top:"120px" }}
      >
  
        <div className="text-start">
          <p
            className="greetings text-white font-bold text-3xl"
            style={{ margin: "1rem 5rem" }}
          >
            Hi, I'm Rahul Kumar <span className="wave">👋🏻</span>
          </p>
          <p
            className="introduction-para text-white"
            style={{ margin: "1rem 2rem 1rem 5rem" }}
          >
            Based in Noida, I'm a results-driven
            <span className="text-sky-500"> Web Developer</span>,currently in 3rd year pursuing  
            <span className="text-sky-500">
              {" "}
              B.Tech degree in Information Technology.
            </span>{" "}
            My professional journey revolves around transforming raw data into
            impactful insights
            {/* <span className="text-sky-500">
              {" "}
              Data Science, Machine Learning, and Generative AI.
            </span> */}
          </p>
          <p
            className="text-white introduction-para"
            style={{ margin: "1rem 2rem 1rem 5rem" }}
          >
            Proficient in{" "}
            <span className="text-sky-500">
              C++,Python, JavaScript and React
            </span>
            , My academic background and practical experience have equipped me with the skills and knowledge necessary to contribute effectively to a dynamic and innovative team.{" "}
    {/* {" "}
            <span className="text-sky-500">Numpy and Pandas,</span> I craft */}
         
            {/* <span className="text-sky-500"> */}
              {" "}
              {/* Scikit-Learn, Tensorflow and Streamlit.{" "}
            </span>
            Beyond coding, I view data as an infinite canvas for innovation, and
            my future is a thrilling horizon of AI possibilities. Committed to
            continuous improvement,
            <span className="text-sky-500">
              {" "}
              I hold certifications in emerging technologies{" "}
            </span>
            and actively participate in workshops to stay ahead of industry
            trends. */}
          </p>
        </div>
        <img
          src={profileImg}
          alt="saumya-gupta-img"
          className=" text-white img-saumya"
          style={{
            margin: "0rem 5rem 1rem 1rem",
            borderRadius: "50%",
            width: "300px",
            height: "300px",
            position: "relative",
            objectFit: "cover",
          }}
        />

      </div>
    </>
  );
}