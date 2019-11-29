import Link from "../common/link";

const Footer = () => {
  return (
    <footer className="page-footer grey darken-3">
      <div className="container">
        <div className="row"></div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <span style={{display: "block"}}>
            Podcasts &copy; {new Date().getFullYear()} A2H
          </span>
          <Link href="https://angel2h.com" text="Angel2H" target="_blank"/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
