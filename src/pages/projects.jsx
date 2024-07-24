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
            link="https://tech-pandas-star-h5sy.onrender.com/"
            github="https://github.com/FatemRahimi"
            title="Panda Star"
            img={star}
            businessProblem="Users often face difficulties in organizing and articulating their behavioral responses effectively in professional or interview settings using the STAR (Situation, Task, Action, Result) method."
            solution= "Created a user-friendly full-stack application for CodeYourFuture users in 4 weeks, application provides user authentication, role management, search and filter functionality, and features for commenting and editing entries, ensuring a collaborative and efficient interview preparation process."
            skills=" Node.js-React.js-PostgreSQL-Jest- AUTH- Bootstrap- GitHub,-Miro-Figma-Jiro"
            app="Full Stack Application"
          />
        </div>
        <div className="col-span-4">
          <ProjectCard
            type="CYF Project"
            link="https://zingy-sunburst-173494.netlify.app/"
            github="https://github.com/FatemRahimi/tv-show-dom-project"
            title="TV Show"
            img={bookMe}
            businessProblem="Users struggle to easily find and explore detailed information about TV shows and episodes, leading to a suboptimal browsing experience."
            solution="Developed a TV Show browser with vanilla JavaScript, allowing users to search and filter TV shows and episodes, view detailed information, and navigate seamlessly."
            skills="JavaScript-HTML-CSS-Fetch API-Moment.js-GitHub- Figma."
            app="Full Stack Application"
          />
        </div>
        <div className="col-span-4">
          <ProjectCard
            type= "Individual"
            link="http://cyf-cafe-menu.s3-website-us-east-1.amazonaws.com/"
            github= "https://github.com/FatemRahimi/cafe-aws"
            title="CafeMenu"
            img={cafeMenu}
            businessProblem= "Cafes struggle to handle menus efficiently because their management systems are not user-friendly. Without an easy admin panel, it's hard to add, edit, or remove items smoothly. The existing tools also lack a good search feature, making it tough for cafe owners to manage their menus effectively."
           solution= "Implement a cloud-based menu management system using AWS services and a user-friendly admin panel built with React.js. This solution leverages Docker for containerization and PostgreSQL for the database, providing a seamless and efficient way to manage cafe menus."
            skills= "React.js-Express.js-PostgreSQL-Tailwind CSS-AWS-Docker Compose-CI/CD-terraform"
            app="Full Stack Application"
          />
        </div>
        <div className="col-span-4">
          <ProjectCard
            type="Individual"
            link="http://cyf-video-hub.s3-website-us-east-1.amazonaws.com"
            github="https://github.com/FatemRahimi/video-aws"
            title="Video Hub"
            img={video}
            businessProblem="Existing video platforms lack user control, particularly with YouTube content. There's a need for a user-friendly system enabling effortless video posting, deletion, and embedded watching. Additionally, essential features such as CRUD operations and voting are required for an enhanced user experience."
            solution="Develop a comprehensive video platform using AWS and Terraform for infrastructure, enabling seamless video posting, deletion, and embedded watching. Integrate CRUD operations and voting features with Node.js and React.js to enhance user control and interaction."
            skills="React.js-Express.js-PostgreSQL-MAterial UI-Docker-AWS-CI/CD"
            app="Full Stack Application"
          />
        </div>
        <div className="col-span-4">
          <ProjectCard
            type="CYF Project"
            link="https://cyf-hotel-react-fa-rahimi.netlify.app/"
            github="https://github.com/FatemRahimi/cyf-hotel-react"
            title="React projetc"
            img={candyCrush}
            businessProblem="Hotel staff often face challenges managing bookings and restaurant orders efficiently, leading to potential operational inefficiencies and reduced customer satisfaction."
           solution="Created a user-friendly React Application for hotel users in 2 weeks, created a React-based Hotel Management Dashboard for efficient booking and restaurant order management. It features a table of booking data with detailed customer info from an external API, real-time search, order counters, and a section for tourist destinations. Client-side routing ensures seamless navigation"
            skills="React.js-CSS"
            app="React Application"
          />
        </div>
        <div className="col-span-4">
          <ProjectCard
            type="indiv"
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
