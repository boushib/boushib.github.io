import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.scss'
import Home from './views/Home'
import Courses from './views/Courses'
import Exams from './views/Exams'
import Contact from './views/Contact'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Route path="/" component={Home} />
        <Route path="/courses" component={Courses} />
        <Route path="/exams" component={Exams} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  )
}

export default App
