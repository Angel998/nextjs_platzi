import React from "react";

import Header from "./header";
import Footer from "./footer";
import PropTypes from "prop-types";

const Layout = props => {
  const { headerProps, footerProps, addContainer } = props;
  return (
    <React.Fragment>
      <Header {...headerProps} />
      <main>
        {addContainer ? (
          <div className="container">{props.children}</div>
        ) : (
          props.children
        )}
      </main>
      <Footer {...footerProps} />
    </React.Fragment>
  );
};

Layout.propTypes = {
  headerProps: PropTypes.object.isRequired,
  footerProps: PropTypes.object.isRequired,
  addContainer: PropTypes.bool.isRequired
};

Layout.defaultProps = {
  addContainer: true,
  headerProps: {},
  footerProps: {}
};

export default Layout;
