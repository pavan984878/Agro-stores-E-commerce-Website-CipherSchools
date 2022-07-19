import "../styles/layouts/footer.css";

export const Footer = () => {
  return (
    <footer className="flex-column-center pd-sm">
      <p className="mg-bottom-xsm">Made by Pavan and Moula</p>
      <div className="footer-links mg-bottom-xsm">
        <a
          className="mg-xsm fs-sm-plus"
          href="https://github.com/pavan984878"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          className="mg-xsm fs-sm-plus"
          href="https://www.linkedin.com/in/avula-pavan-kumar-9a0a5b192/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          className="mg-xsm fs-sm-plus"
          href="https://twitter.com/PavanKu86129713"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <p className="copyright mg-bottom-xsm">© 2022 AgroStores</p>
    </footer>
  );
};
