import SectionTitle from "./SectionTitle";

const data = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1683273024/html_coobkg.png",
    title: "HTML",
    description:
      "HTML5 is the newest version of HTML, featuring improved multimedia support and device compatibility for modern web development.",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1683321108/css3_arbfje.webp",
    title: "CSS",
    description:
      "CSS (Cascading Style Sheets) is a language used to add visual design and layout to HTML web pages, creating a more polished and professional look.",
  },

  {
    id: 3,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1683272974/es6_d425uu.png",
    title: "JavaScript",
    description:
      "Javascript is a programming language used to add interactivity and dynamic behavior to web pages,making them more engaging and responsive for users.",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1683273078/React-icon_v5ggbm.png",
    title: "React.js",
    description:
      "React is a popular JavaScript library used for building dynamic user interfaces and single-page applications, with a focus on modular and reusable code.",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1683273058/next_cii95q.png",
    title: "Next.js",
    description:
      "Next.js is a framework for building server-side rendered React applications, offering features like automatic code splitting,static site generation",
  },

  {
    id: 6,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1683321277/node2_hl5spv.webp",
    title: "Node.js",
    description:
      "Node.js is a platform for building server-side applications using JavaScript, it's both the client and server sides for greater efficiency and flexibility.",
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1683321470/express_2_nzyefz.webp",
    title: "Express.js",
    description:
      "Express is a popular Node.js web framework used to build server-side applications and APIs, flexibility for creating scalable and efficient web applications.",
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1683317058/mongodb_grmibx.svg",
    title: "Mongodb",
    description:
      "MongoDB is a popular NoSQL database management system, providing flexible and scalable data storage for modern web applications,",
  },
  {
    id: 9,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1683273099/redux_xbknbb.png",
    title: "Redux",
    description:
      "Redux is a state management library for JavaScript applications, providing a centralized and predictable way to manage application state.",
  },
  {
    id: 10,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1683273043/JSON-Web-Token-_uqwckl.png",
    title: "JWT",
    description:
      "JWT is a standard for securely transmitting information between parties as a JSON object, often used for authentication web applications.",
  },
  {
    id: 11,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1683273089/react-router_ayfefp.png",
    title: "React Router",
    description:
      "React Router is a popular routing library for React applications, allowing developers to handle client-side routing and navigation with a declarative.",
  },

  {
    id: 12,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1683310840/Axios_o4gnvj.png",
    title: "Axios",
    description:
      "Axios is a popular JavaScript library used to make HTTP requests from the browser or Node.js, with support for interceptors request and response data.",
  },

  {
    id: 13,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1683273111/Tailwind_CSS_fzkhzi.png",
    title: "Tailwind CSS",
    description:
      "Tailwind CSS is a utility-first CSS framework, providing a collection of pre-built CSS classes that can be easily combined for web applications.",
  },
  {
    id: 14,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1683272953/bootstrap_oucwec.png",
    title: "Bootstrap",
    description:
      "Bootstrap is a popular front-end web development framework, providing a collection of pre-built HTML, CSS, and JavaScript components.",
  },

  {
    id: 15,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1683273015/gsap_luttsc.png",
    title: "GSAP",
    description:
      "GSAP is a popular JavaScript animation library, providing a powerful and flexible way to create animations for web applications.",
  },
  {
    id: 16,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1683321949/firebase3_b0825c.webp",
    title: "Firebase",
    description:
      "Firebase is a mobile and web application development platform by Google, providing a range of cloud-based services and tools for secure applications.",
  },
];

const Skills = () => {
  return (
    <div className="skills container mx-auto mt-40" id="skills">
      <SectionTitle title={"Skills"} />

      <div className="skills-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 sm:gap-14 mt-40 ">
        {data.map((skill) => (
          <div
            key={skill.id}
            className="skill flex flex-col gap-5  rounded-xl bg-gray-800 h-[35rem] overflow-hidden  hover:shadow-2xl  duration-300"
          >
            <div className="img w-36 sm:w-20 mx-auto mt-10 rounded-full">
              <img src={skill.image} alt={skill.title} className="w-full" />
            </div>
            <div className="texts flex flex-col gap-2 p-5 overflow-hidden">
              <span className="uppercase text-2xl font-semibold text-sky-500 text-center">
                {skill.title}
              </span>
              <p className="mt-5 text-center">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
