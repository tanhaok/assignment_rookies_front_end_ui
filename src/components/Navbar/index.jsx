import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav d-flex flex-row w-100 justify-content-evenly align-items-end fw-bold fs-5 pt-2">
      <div className="nav-item">
        <Link to="best_sellers">Best Sellers</Link>
      </div>
      <div className="nav-item">
        <Link to="new_releases">New Releases</Link>
      </div>

      <div className="nav-item dropdown">
        <Link
          to="fiction"
          className="dropdown-toggle"
          id="dropMenuFiction"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          role={"button"}
        >
          Fiction
        </Link>

        <ul className="dropdown-menu" aria-labelledby="dropMenuFiction">
          <li>
            <Link className="dropdown-item" to={"fiction/romance"}>
              Romance
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              to={"fiction/comics-graphic-novels"}
            >
              Comics &amp; Graphic Novels
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to={"fiction/historical-fiction"}>
              Historical Fiction
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to={"fiction/{horror}"}>
              Horror
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to={"fiction/literature-fiction"}>
              Literature &amp; Fiction
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to={"fiction/manga"}>
              Manga
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              to={"fiction/mystery-thrillers-true-crime"}
            >
              Mystery, Thrillers, &amp; Crime
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to={"fiction/poetry"}>
              Poetry
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to={"fiction/science-fiction"}>
              Science Fiction
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to={"fiction/fantasy"}>
              Fantasy
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to={"fiction/lgbtq-fiction"}>
              LGBTQ+ Fiction
            </Link>
          </li>
        </ul>
      </div>

      <div className="nav-item dropdown">
        <Link
          to="nonfiction"
          className="dropdown-toggle"
          id="dropMenuNonfiction"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          role={"button"}
        >
          Nonfiction
        </Link>

        <ul className="dropdown-menu" aria-labelledby="dropMenuNonfiction">
          <li>
            <Link className="dropdown-item" to="nonfiction/arts-photography">
              Arts &amp; Photography
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="nonfiction/biography-memoir">
              Biography &amp; Memoir
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="nonfiction/business-investing">
              Business &amp; Investing{" "}
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="nonfiction/cooking-wine">
              Cooking &amp; Wine
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="nonfiction/history">
              History
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="nonfiction/humor-games">
              Humor &amp; Games
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="nonfiction/science-technology">
              Science &amp; Technology
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              to="nonfiction/self-development-hobbies"
            >
              Self Development &amp; Hobbies
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              to="nonfiction/spirituality-and-religion"
            >
              Spirituality &amp; Religion
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="nonfiction/travel">
              Travel
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="nonfiction/lgbtq-nonfiction">
              LGBTQ+ Nonfiction
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-item">
        <Link to="recommend">Recommend</Link>
      </div>
    </div>
  );
};

export default Navbar;
