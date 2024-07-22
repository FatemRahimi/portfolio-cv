import AnimatedText from "@/components/AnimatedText";
import ProjectCard from "@/components/ProjectCard";
import bookMe from "public/images/bookMe.jpg";
import star from "public/images/star.jpg";
import cafeMenu from "public/images/cafeMenu.jpg";
import video from "public/images/video.jpg";
import candyCrush from "public/images/candyCrush.jpg";
import eShop from "public/images/eShop.jpg";

const projects = () => {
  return (
    <main className="flex flex-col justify-start items-center min-h-full py-[2rem] px-[1rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem] xl:px-[5rem]">
      <div>
        <AnimatedText text="My Projects" />
      </div>
      <div className="grid sm:grid-cols-4 md:grid-cols-8 xl:grid-cols-12 gap-10 xl:gap-20 mt-10">
        <div className="col-span-4">
          <ProjectCard
            type="Team Work"
            link="https://star-evolution.onrender.com/"
            github="https://github.com/FatemRahimi"
            title="Star"
            img={star}
            businessProblem="Trainees at CodeYourFuture struggle to structure interview examples using the standardized STAR format (Situation, Task, Action, Result). A proposed solution involves a user-friendly system with individual accounts, STAR format recording, and options for commenting, searching, and sorting."
            skills="React.js-Tanstack Query-Jest-Express.js-TypeScript-Drizzle ORM-PostgreSQL-Oauth-Material UI-Docker"
            app="Full Stack Application"
          />
        </div>
        <div className="col-span-4">
          <ProjectCard
            type="Team Work"
            link="https://starter-kit-szhj.onrender.com/"
            github="https://github.com/farzaneh-haghani/Final-Project-BookMe"
            title="BookMe"
            img={bookMe}
            businessProblem="Users face challenges in finding and booking experts proficient in various languages for consultations. Current platforms are limited to specific services (e.g., plumbing, legal, tech) and lack inclusivity. The absence of a language filter feature complicates the process of finding professionals fluent in specific languages."
            skills="React.js-Express.js-Sequelize-PostgreSQL-Oauth-Material UI"
            app="Full Stack Application"
          />
        </div>
        <div className="col-span-4">
          <ProjectCard
            type="Team Work"
            link="http://cyf-cafe-menu.s3-website-us-east-1.amazonaws.com/"
            github="https://github.com/farzaneh-haghani/Cloud-Cafe-Menu"
            title="CafeMenu"
            img={cafeMenu}
            businessProblem="Cafes struggle to handle menus efficiently because their management systems are not user-friendly. Without an easy admin panel, it's hard to add, edit, or remove items smoothly. The existing tools also lack a good search feature, making it tough for cafe owners to manage their menus effectively."
            skills="React.js-Express.js-PostgreSQL-Tailwind CSS-AWS-Docker Compose-CI/CD-terraform"
            app="Full Stack Application"
          />
        </div>
        <div className="col-span-4">
          <ProjectCard
            type="Individual"
            link="http://cyf-video-hub.s3-website-us-east-1.amazonaws.com"
            github="https://github.com/farzaneh-haghani/Video-Hub"
            title="Video Hub"
            img={video}
            businessProblem="Existing video platforms lack user control, particularly with YouTube content. There's a need for a user-friendly system enabling effortless video posting, deletion, and embedded watching. Additionally, essential features such as CRUD operations and voting are required for an enhanced user experience."
            skills="React.js-Express.js-PostgreSQL-MAterial UI-Docker-AWS-CI/CD"
            app="Full Stack Application"
          />
        </div>
        <div className="col-span-4">
          <ProjectCard
            type="Team Work"
            link="https://teamwork-candycrush.netlify.app"
            github="https://github.com/Farnooshmo/teamwork-candy-crush-react"
            title="Candy Crush"
            img={candyCrush}
            summary="The Candy Crush game is a delightful desktop experience created with React and basic CSS. While it provides an enjoyable gaming session, it currently focuses solely on tracking points without introducing levels or rewards. Enhancing the game's engagement could involve adding new and exciting elements to keep players entertained and motivated."
            skills="React.js-CSS"
            app="React Application"
          />
        </div>
        <div className="col-span-4">
          <ProjectCard
            type="Team Work"
            link="https://london9-amazon-clone-50-react-project.netlify.app"
            github="https://github.com/ShayanMahnam/team-amazon-clone"
            title="eShop"
            img={eShop}
            summary="A responsive React application seamlessly integrated with Firebase for secure authentication. Enjoy the convenience of effortlessly adding and removing items from your basket, elevating your shopping journey for a hassle-free and user-friendly experience."
            skills="React.js-Firebase-CSS"
            app="React Application"
          />
        </div>
      </div>
    </main>
  );
};

export default projects;
