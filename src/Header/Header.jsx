import samplePhoto from "../assets/SamplePhoto.jpg";

export default function Header() {
    return (
        <header id="headerConfig">
        <div id="mainInfo">
          <div>
            <h1>Ime Prezime</h1>
            <p>
              CORE COMPETENCIES: • Problem-solving • Self-regulation •
              Organization • Resilience in pursuing goals and results • Software
              knowledge: Abacus, Microsoft Office, etc. • Empathy • Customer
              Satisfaction • Natural learner • Motivation • Excellent listening
              • Self-awareness • Adaptability •
            </p>
          </div>
          <img src={samplePhoto} alt="sample-photo"></img>
        </div>
        <section id="contactBar">
          <ul>
            <li>Mail: somemail@gmail.com</li>
            <li>Phone: 0123456789</li>
            <li>Social: @instagram</li>
          </ul>
        </section>
      </header>
    )
}