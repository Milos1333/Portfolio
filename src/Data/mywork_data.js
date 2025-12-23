import sredstva from "../assets/osnovnaSredstva.png";
import trijaza from "../assets/trijaza.png";
import blog from "../assets/blogPlatform.png";
import invoices from "../assets/invoices.png";

const mywork_data = [
  {
    w_no: 1,
    w_name: "Osnovna sredstva",
    w_img: sredstva,
    w_desc:
      "An asset management application developed using React for the frontend, Node.js for the backend, and MySQL as the database for secure and efficient data storage.",
  },
  {
    w_no: 3,
    w_name: "Invoices",
    w_img: invoices,
    w_desc:
      "An invoice management application built with React and Vite, using a simulated backend. The system enables management of invoices, sellers, and customers, with full CRUD functionality and smooth client-side navigation for an efficient user experience.",
  },
  {
    w_no: 2,
    w_name: "Trijaza hitnih slucajeva",
    w_img: trijaza,
    w_desc:
      "A web-based emergency triage application built with React.js on the frontend and ColdFusion on the backend, using a MySQL database. The system supports efficient classification and prioritization of patients, providing a clear and responsive user interface with reliable server-side processing.",
  },
  {
    w_no: 4,
    w_name: "Blog platform",
    w_img: blog,
    w_desc:
      "A full-stack blog platform built with React, Node.js, and MySQL. It supports user authentication with login and registration, form validation, and full CRUD functionality for blog posts. The application features a responsive UI implemented with PrimeReact and is designed for scalability and clean code structure.",
  },
];

export default mywork_data;
