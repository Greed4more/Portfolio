import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from "react";

const gang = [
  {
    id: "friend-01",
    name: "BISWASZIN",
    role: "DEVELOPER · GAMER",
    image: "/projects/Ankit.png",
    quote: "LINK LINK",
    portfolio: "",
  },
  {
    id: "friend-02",
    name: "AALBATROSSGUY",
    role: "SUPERCODER · ADORABLE",
    image: "/projects/Kishaloy.png",
    quote: "BRO CAN BUILD ANYTHING",
    portfolio: "https://kishaloyroy.com",
  },
]
function App() {
  const [currentSection, setCurrentSection] = useState(1);
  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "work",
      "lab",
      "now",
      "gaming",
      "gang",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + window.innerHeight * 0.4;

      let activeSection = 1;

      sectionIds.forEach((id, index) => {
        const section = document.getElementById(id);

        if (!section) return;

        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY;

        if (scrollPosition >= sectionTop) {
          activeSection = index + 1;
        }
      });

      setCurrentSection(activeSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, {
    stiffness: 100,
    damping: 20,
  })

  const smoothY = useSpring(mouseY, {
    stiffness: 100,
    damping: 20,
  })

  const handleMouseMove = (event) => {
    const x = event.clientX / window.innerWidth - 0.5
    const y = event.clientY / window.innerHeight - 0.5

    mouseX.set(x * 20)
    mouseY.set(y * 20)
  }

  return (
    <main className="home" onMouseMove={handleMouseMove}>
      <div id="top" />
      <nav className="nav">
        <a className="logo" href="#home">GREED / /</a>

        <div className="page">
          {String(currentSection).padStart(2, "0")} — 08
        </div>
      </nav>

      <section id="home" className="hero">
        <motion.h1
          style={{
            x: smoothX,
            y: smoothY,
          }}
        >
          GREED
        </motion.h1>

        <motion.p
          style={{
            x: useSpring(mouseX, {
              stiffness: 60,
              damping: 25,
            }),
          }}
        >
          I BUILD THINGS.
        </motion.p>
      </section>
      <motion.section id='about'
        className="about"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="about-label">
          02 — ABOUT
        </div>

        <div className="about-content">
          <motion.p
            className="about-title"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            I BUILD THINGS
            <br />
            I'M CURIOUS ABOUT.
          </motion.p>

          <motion.p
            className="about-text"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            I'm Shaunak Sah, a Computer Science student studying CSE from a T3 college who likes gaming
            and figuring out how things work — and then building something
            with what I learn.
          </motion.p>
        </div>
      </motion.section>
      <motion.section id="work"
        className="work"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <div className="work-label">
          03 — WORK
        </div>

        <div className="work-intro">
          <h2>
            THINGS
            <br />
            I'VE
            <br />
            BUILT.
          </h2>
        </div>

        <article className="project">
          <div className="project-meta">
            <span>01</span>
            <span>2026</span>
          </div>

          <div className="project-header">
            <div>
              <p className="project-type">AI × TEAMS × WEB</p>

              <h3>TEAM FORGE AI</h3>
            </div>

            <p className="project-description">
              An AI-powered platform for building better teams,
              understanding compatibility and turning ideas into
              structured project plans.
            </p>
          </div>

          <div className="project-image">
            <img
              src="/projects/teamforge.png"
              alt="TeamForge AI interface"
            />
          </div>

          <div className="project-footer">
            <div className="project-tech">
              <span>REACT</span>
              <span>AI</span>
              <span>WEB</span>
            </div>

            <a
              href="https://teamforgeaiv3.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              VIEW PROJECT ↗
            </a>
          </div>
        </article>
        <article className="project project-secondary">
          <div className="project-meta">
            <span>02</span>
            <span>2026</span>
          </div>

          <div className="project-header">
            <div>
              <p className="project-type">
                AI × COMPUTER VISION × HARDWARE
              </p>

              <h3>
                SMART
                <br />
                WASTE
              </h3>
            </div>

            <p className="project-description">
              An intelligent waste classification system designed
              to identify different types of waste and automate
              the sorting process using computer vision and
              embedded hardware.
            </p>
          </div>

          <div className="project-image">
            <img
              src="/projects/busterbage.png"
              alt="SmartBin smart waste management system"
            />
          </div>

          <div className="project-footer">
            <div className="project-tech">
              <span>ESP32</span>
              <span>EDGE IMPULSE</span>
              <span>AI / ML</span>
              <span>SENSORS</span>
            </div>

            <a
              href="https://busterbage.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              VIEW PROJECT ↗
            </a>
          </div>
        </article>
      </motion.section>
      <section id='lab' className="lab">
        <div className="lab-label">
          04 — THE LAB
        </div>

        <div className="lab-list">

          <article className="lab-item">
            <div className="lab-number">001</div>

            <div className="lab-info">
              <h3>LINUX</h3>
              <p>Learning the system , breaking things,
                fixing them and figuring out how things happen underneath,
                currently with Omarchy.
              </p>
            </div>

            <div className="lab-arrow">↗</div>
          </article>

          <article className="lab-item">
            <div className="lab-number">002</div>
            <div className="lab-info">
              <h3>HARDWARE</h3>
              <p>Experiments with microcontrollers,
                sensors, computer vision and
                physical systems.
              </p>
            </div>
            <div className="lab-arrow">↗</div>
          </article>

          <article className="lab-item">
            <div className="lab-number">003</div>
            <div className="lab-info">
              <h3>RANDOM SHIT</h3>
              <p>
                Weird ideas, small experiments and
                things I built because I was bored
                and wanted to try something new.
              </p>
            </div>
            <div className="lab-arrow">↗</div>
          </article>

        </div>
        <section id="now" className="now">
          <div className="now-label">
            05 — NOW
          </div>

          <div className="now-header">
            <h2>RIGHT NOW.</h2>

            <p>
              A snapshot of what I'm building,
              learning and obsessing over.
            </p>
          </div>

          <div className="now-list">

            <div className="now-item">
              <span className="now-key">BUILDING</span>

              <span className="now-value">
                THIS WEBSITE
              </span>
            </div>

            <div className="now-item">
              <span className="now-key">LEARNING</span>

              <span className="now-value">
                WEB DEVELOPMENT · AI · SYSTEMS
              </span>
            </div>

            <div className="now-item">
              <span className="now-key">RUNNING</span>

              <span className="now-value">
                LINUX
              </span>
            </div>

            <div className="now-item">
              <span className="now-key">PLAYING</span>

              <span className="now-value">
                VALORANT · WITCHER 3
              </span>
            </div>

            <div className="now-item">
              <span className="now-key">THINKING ABOUT</span>

              <span className="now-value">
                WHAT TO BUILD NEXT
              </span>
            </div>

          </div>
        </section>
      </section>
      <section id='gaming' className="gaming">
        <div className="gaming-label">
          06 — GAMING
        </div>

        <div className="gaming-header">
          <div>
            <p>CURRENT ROTATION</p>

            <h2>
              PLAYER
              <br />
              MODE.
            </h2>
          </div>

          <span className="gaming-status">
            <span className="status-dot" />
            ONLINE
          </span>
        </div>

        <div className="game-list">

          <article className="game-item">
            <div className="game-number">
              01
            </div>

            <div className="game-info">
              <h3>VALORANT</h3>
              <p>COMPETITIVE · FPS · RANKED</p>
            </div>

            <div className="game-arrow">
              ↗
            </div>
          </article>

          <article className="game-item">
            <div className="game-number">
              02
            </div>

            <div className="game-info">
              <h3>WHERE WINDS MEET</h3>
              <p>RPG · EXPLORATION · WUXIA</p>
            </div>

            <div className="game-arrow">
              ↗
            </div>
          </article>

          <article className="game-item">
            <div className="game-number">
              03
            </div>

            <div className="game-info">
              <h3>THE WITCHER 3</h3>
              <p>OPEN WORLD · RPG · AURA</p>
            </div>

            <div className="game-arrow">
              ↗
            </div>
          </article>

        </div>
      </section>
      <section id='gang' className="gang">
        <div className="gang-label">
          07 — THE GANG
        </div>

        <div className="gang-intro">
          <p>THE PEOPLE AROUND ME.</p>

          <h2>
            THE
            <br />
            GANG.
          </h2>
        </div>

        <div className="gang-list">

          {gang.map((person, index) => (
            <article className="gang-card" key={person.name}>
              <div className="gang-image">
                <img
                  src={person.image}
                  alt={person.name}
                />
              </div>

              <div className="gang-info">
                <div>
                  <span className="gang-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{person.name}</h3>

                  <p>{person.role}</p>

                  <span className="gang-quote">
                    "{person.quote}"
                  </span>
                </div>

                {person.portfolio && (
                  <a
                    href={person.portfolio}
                    target="_blank"
                    rel="noreferrer"
                  >
                    VISIT {person.name.split(" ")[0]}'S WORLD ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id='contact' className="contact">
        <div className="contact-label">
          08 — CONTACT
        </div>

        <div className="contact-main">
          <p className="contact-kicker">
            GOT SOMETHING WORTH BUILDING?
          </p>

          <h2>
            LET'S
            <br />
            TALK<span>↗</span>
          </h2>

          <a
            className="contact-email"
            href="mailto:shaunak2710@gmail.com"
          >
            shaunak2710@gmail.com
          </a>
        </div>

        <div className="contact-links">
          <a
            href="https://github.com/Greed4more"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB ↗
          </a>

          <a
            href="https://www.linkedin.com/in/shaunak-sah-a16689382/"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN ↗
          </a>

          <a
            href="shaunak2710@gmail.com"
          >
            EMAIL ↗
          </a>
        </div>

        <footer className="contact-footer">
          <span>GREED / /</span>

          <span>BUILT IN LINUX</span>

          <a href="#top" className="back-to-top">
            BACK TO TOP ↑
          </a>
        </footer>
      </section>

    </main>
  )
}

export default App
