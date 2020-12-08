import React from 'react'
import './Navbar.scss'

const Navbar = () => (
  <nav>
    <div className="container nav__inner">
      <a className="nav-brand" href="/">
        Teach
      </a>
      <ul className="main-menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/courses">Courses</a>
        </li>
        <li>
          <a href="/exercices">Exercices</a>
        </li>
        <li>
          <a href="/examens">Exams</a>
        </li>
        <li>
          <a href="/articles">Articles</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
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
