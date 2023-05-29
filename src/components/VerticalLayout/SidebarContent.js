import React, { useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";


// //Import Scrollbar
import SimpleBar from "simplebar-react";

// MetisMenu
import MetisMenu from "metismenujs";
import withRouter from "components/Common/withRouter";
import { Link } from "react-router-dom";

//i18n
import { withTranslation } from "react-i18next";

const SidebarContent = props => {
  const ref = useRef();
  const activateParentDropdown = useCallback((item) => {
    item.classList.add("active");
    const parent = item.parentElement;
    const parent2El = parent.childNodes[1];

    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show");
    }

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show"); // ul tag

        const parent3 = parent2.parentElement; // li tag

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement; // ul
          if (parent4) {
            parent4.classList.add("mm-show"); // ul
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add("mm-show"); // li
              parent5.childNodes[0].classList.add("mm-active"); // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false;
    }
    scrollElement(item);
    return false;
  }, []);

  const removeActivation = (items) => {
    for (var i = 0; i < items.length; ++i) {
      var item = items[i];
      const parent = items[i].parentElement;

      if (item && item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (parent) {
        const parent2El =
          parent.childNodes && parent.childNodes.lenght && parent.childNodes[1]
            ? parent.childNodes[1]
            : null;
        if (parent2El && parent2El.id !== "side-menu") {
          parent2El.classList.remove("mm-show");
        }

        parent.classList.remove("mm-active");
        const parent2 = parent.parentElement;

        if (parent2) {
          parent2.classList.remove("mm-show");

          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.remove("mm-active"); // li
            parent3.childNodes[0].classList.remove("mm-active");

            const parent4 = parent3.parentElement; // ul
            if (parent4) {
              parent4.classList.remove("mm-show"); // ul
              const parent5 = parent4.parentElement;
              if (parent5) {
                parent5.classList.remove("mm-show"); // li
                parent5.childNodes[0].classList.remove("mm-active"); // a tag
              }
            }
          }
        }
      }
    }
  };

  const path = useLocation();
  const activeMenu = useCallback(() => {
    const pathName = path.pathname;
    let matchingMenuItem = null;
    const ul = document.getElementById("side-menu");
    const items = ul.getElementsByTagName("a");
    removeActivation(items);

    for (let i = 0; i < items.length; ++i) {
      if (pathName === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  }, [path.pathname, activateParentDropdown]);

  useEffect(() => {
    ref.current.recalculate();
  }, []);

  useEffect(() => {
    new MetisMenu("#side-menu");
    activeMenu();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    activeMenu();
  }, [activeMenu]);

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop;
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300;
      }
    }
  }

  return (
    <React.Fragment>
    <SimpleBar className="h-100" ref={ref}>
      <div id="sidebar-menu">
        <ul className="metismenu list-unstyled" id="side-menu">
          <li className="menu-title">{props.t("Menu")} </li>
          <li>
            <Link to="/#" className="has-arrow">
              <i className="bx bx-home-circle"></i>
              <span>Home</span>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="/orderTable">Table</Link>
              </li>
              <li>
                <Link to="/home">Home</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/#" className="has-arrow">
              <i className="bx bxs-user-detail"></i>
              <span key="t-jobs">User Management</span>
            </Link>
            <ul className="sub-menu">
              <li><Link to="/user-management/search">User Search</Link></li>
              <li><Link to="/user-management/seller-reg">Seller Registration</Link></li>
              <li><Link to="/user-management/qna">QNA </Link></li>
              <li><Link to="/user-management/review">Review</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/#" className="has-arrow">
              <i className="bx bx-menu"></i>
              <span>Menu Management</span>
            </Link>
            <ul className="sub-menu">
              <li><Link to="/menu-management">Menu Settings 1</Link></li>
              <li><Link to="#">Menu Settings 2</Link></li>
              <li><Link to="#">Menu Settings 3</Link></li>
              <li><Link to="#">Menu Settings 4</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/#" className="has-arrow">
              <i className="bx bxs-detail"></i>
              <span>Banner Management</span>
            </Link>
            <ul className="sub-menu">
              <li><Link to="#">Main Top Banner</Link></li>
              
              <li><Link to="#">Middle Banner</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/#" className="has-arrow">
              <i className="bx bx-receipt"></i>
              <span>Category Management</span>
            </Link>
            <ul className="sub-menu">
            <li><Link to="#">Category</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/#" className="has-arrow">
              <i className="bx bxl-product-hunt"></i>
              <span>Product Management</span>
            </Link>
            <ul className="sub-menu">
              <li><Link to="#">Product</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/#" className="has-arrow">
              <i className="bx bxs-bank"></i>
              <span>Transaction Management</span>
            </Link>
            <ul className="sub-menu">
              <li><Link to="#">Payment completed</Link></li>
              
              <li><Link to="#">Order cancellation</Link></li>
              
              <li><Link to="#">Shipping in progress</Link></li>
              
              <li><Link to="#">Delivery completed</Link></li>
              
              <li><Link to="#">Purchase confirmation</Link></li>
              
              <li><Link to="#">Refund request</Link></li>
              
              <li><Link to="#">Refund completed</Link></li>
              
              <li><Link to="#">Exchange request</Link></li>
              
              <li><Link to="#">Exchange in progress</Link></li>
              
              <li><Link to="#">Exchange completed</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </SimpleBar>
  </React.Fragment>
  );
};

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
};

export default withRouter(withTranslation()(SidebarContent));
