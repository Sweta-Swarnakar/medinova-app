import { NavLink } from "react-router-dom";
import "../styles/Header.css"

const links = [
  {
    title: "Medinova",
    link: "/"
  },

  {
    title: "Login",
    link: "/login"
  },

  {
    title: "Signup",
    link: "/signup"
  },


 
];
export const Nav = () => {
  return(
    //map through the link ad display it in header
     <div className="nav">
       {links.map(({title, link}, index) => {
             return <NavLink key={index} to={link} style={{ textDecoration: 'none', margin: 'auto'}} >{title}</NavLink>
       })}
     </div>

  );
};
