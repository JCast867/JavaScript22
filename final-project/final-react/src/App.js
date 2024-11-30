import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Banner(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.project}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#" className="nav-link disabled">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link disabled">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link disabled">
                  Experience
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <h1 className="text-center mb-4">
          Classes and Projects I've completed!
        </h1>
      </div>
    </>
  );
}

function Main(props) {
  return (
    <div className="container">
      <h2 className="text-start mb-4">Classes</h2>

      <ul className="list-group mb-4">
        <li className="list-group-item">{props.c1}</li>
        <li className="list-group-item">{props.c2}</li>
        <li className="list-group-item">{props.c3}</li>
        <li className="list-group-item">{props.c4}</li>
        <li className="list-group-item">{props.c5}</li>
        <li className="list-group-item">{props.c6}</li>
        <li className="list-group-item">{props.c7}</li>
        <li className="list-group-item">{props.c8}</li>
        <li className="list-group-item">{props.c9}</li>
        <li className="list-group-item">{props.c10}</li>
        <li className="list-group-item">{props.c11}</li>
        <li className="list-group-item">{props.c12}</li>
        <li className="list-group-item">{props.c13}</li>
        <li className="list-group-item">{props.c14}</li>
        <li className="list-group-item">{props.c15}</li>
      </ul>

      <h2 className="text-start mb-4">Projects</h2>

      <h5 className="text-start mb-1">
        Enhanced Chat System with File Transfers
      </h5>
      <p>Final Project for Distributed Systems</p>
      <ul className="list-group mb-4">
        <li className="list-group-item">
          Developed a Python-based client-server chat application using socket
          programming and multithreading, enabling real-time messaging and
          secure binary file transfers between multiple clients.
        </li>
        <li className="list-group-item">
          Designed and Implemented custom communication protocols with
          length-prefix encoding for reliable data transmission, ensuring
          accurate message reconstruction and maintaining data integrity.
        </li>
        <li className="list-group-item">
          Managed Concurrent Client Connections and File Transfers, ensuring
          high system scalability and stability, which contributed to achieving
          a 100% project grade by meeting all specified requirements
          effectively.
        </li>
      </ul>

      <h5 className="text-start mb-1">
        Full-Stack Finance Tracking Web Application
      </h5>
      <p>Group Project for Software Projects</p>
      <ul className="list-group mb-4">
        <li className="list-group-item">
          Developed a web application using Python/Django and PostgreSQL that
          tracks the users bank accounts, providing a secure login/logout
          feature and account management options for savings, checking, and
          credit card accounts.
        </li>
        <li className="list-group-item">
          Implemented functionality for users to perform transactions
          (withdrawals, deposits, or purchases), creating, editing, and managing
          budgets, as well as scheduling and monitoring recurring transactions
          to aid in financial planning.
        </li>
        <li className="list-group-item">
          Collaborated in a team of four, utilized GitHub for version control,
          Docker for consistent environment management.
        </li>
      </ul>

      <h5 className="text-start mb-1">Todo Full-Stack Web Application</h5>
      <p>Group Project for Software Projects</p>
      <ul className="list-group mb-4">
        <li className="list-group-item">
          Developed a task management web application using Python, Django, and
          PostgreSQL, implementing user authentication, task creation and
          editing, team creation, and status tracking with a responsive
          Bootstrap interface.
        </li>
        <li className="list-group-item">
          Integrated secure user authentication and custom user models, enabling
          profile management and error handling while ensuring data integrity
          through PostgreSQL database implementation.
        </li>
        <li className="list-group-item">
          Collaborated in a team of four to design, develop, and deploy a
          full-stack application, utilizing GitHub for version control and
          Docker for consistent environment management.
        </li>
      </ul>

      <h5 className="text-start mb-1">NBA Points Analysis</h5>
      <p>Independent Project for Data Analysis & Regression</p>
      <ul className="list-group mb-4">
        <li className="list-group-item">
          Used linear regression to develop a model to accurately predict the
          points per game for NBA players using SAS.
        </li>
        <li className="list-group-item">
          Conducted data exploration and data analysis using residual plots and
          normality plots, testing and validation by splitting the data and
          comparing the training vs the testing, and predictions on randomly
          generated statistics.
        </li>
      </ul>

      <h5 className="text-start mb-1">Trading System Simulation</h5>
      <p>Independent Project for Object-Oriented Software Development</p>
      <ul className="list-group mb-4">
        <li className="list-group-item">
          Developed a comprehensive trading system simulation in Java while
          showcasing object-oriented design patterns including strategy,
          factory, flyweight, singleton, facade, data transfer object, and
          observer design patterns.
        </li>
        <li className="list-group-item">
          Demonstrated proficiency in managing serialized data, applying
          real-time updates, ensuring system adaptability with dynamic market
          conditions, integrating a GUI, exception handling, and market
          tracking.
        </li>
      </ul>

      <h5 className="text-start mb-1">Automated Movie Rating Bot</h5>
      <p>Group Project for Intro to Computer Science II</p>
      <ul className="list-group mb-4">
        <li className="list-group-item">
          Collaboratively designed and implemented an automation bot using
          UiPath, enabling the extraction of movie ratings from IMBd based on
          titles listed in an Excel file, enhancing data processing efficiency
          and accuracy.
        </li>
        <li className="list-group-item">
          Engaged with Protiviti professionals for guidance on project
          execution, demonstrating the ability to work in a professional team
          environment and apply practical automation solutions to real-world
          data management challenges.
        </li>
      </ul>
    </div>
  );
}

function Footer(props) {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container text-center">
        <span className="text-muted">
          © {props.name} {props.date}
        </span>
      </div>
    </footer>
  );
}

function App() {
  const dateToday = new Date().toLocaleDateString();
  return (
    <>
      <Banner project="Final Project" />
      <Main
        c1="Intro to Computer Science I & II"
        c2="Data Structures I & II"
        c3="Design and Analysis of Algorithms"
        c4="Sophomore Lab in Applied Computing"
        c5="Automata Theory"
        c6="Concepts of Programming Languages"
        c7="Database Systems"
        c8="Computer Systems I & II"
        c9="Distributed Systems"
        c10="Foundations of Artificial Intelligence"
        c11="Data Analysis"
        c12="Software Testing"
        c13="Object-Oriented Software Development"
        c14="Data Analysis & Regression"
        c15="Software Project"
      />
      <Footer name="Jaime Castaneda" date={dateToday} />
    </>
  );
}

export default App;
