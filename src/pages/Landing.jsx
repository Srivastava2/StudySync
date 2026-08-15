import { Link } from 'react-router-dom'
import './Landing.css'
import laptopImg from '../assets/laptop.png'

const features = [
  { title: "Digital Notes", description: "Create, edit, delete, search, and organize with ease." },
  { title: "Focused Task Management", description: "Todo, due date, priority, mark complete." },
  { title: "Flexible Class Scheduler", description: "Subject-wise timetable, built for you." },
  { title: "Attendance Tracker", description: "Subject-wise percentage, tracked automatically." }
]

function Landing() {
  return (
    <div className="landing">
      <nav className="navbar">
        <h2 className="logo">StudySync</h2>
        <div className="nav-buttons">
          <Link to="/login"><button className="btn-outline">Login</button></Link>
          <Link to="/signup"><button className="btn-filled">Sign Up</button></Link>
        </div>
      </nav>

      <section className="hero">
  <div className="hero-text">
  <h1>LEARN.<br />PRACTICE.<br />GROW.</h1>
  <div className="hero-subrow">
    <p>Your Ultimate Student Companion. Effortlessly manage your time and studies.</p>
    <Link to="/signup"><button className="btn-filled hero-btn">Sign Up for Free</button></Link>
  </div>
</div>
  <div className="hero-image">
    <img src={laptopImg} alt="StudySync dashboard preview" className="hero-img" />
  </div>
</section>

      <section className="features">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      <footer className="footer">
        <p>&copy; 2026 StudySync. Built by Arpit,Anika.</p>
      </footer>
    </div>
  )
}

export default Landing