import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => (
  <nav>
    <div className="container nav__inner">
      <a className="nav-brand" href="/">
        Teach
      </a>
      <ul className="main-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/exams">Exams</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div class="btn-group">
        <button type="submit" className="btn primary">
          Sign in
        </button>
        <button type="submit" className="btn seconday">
          Sign up
        </button>
      </div>
    </div>
  </nav>
)

export default Navbar
