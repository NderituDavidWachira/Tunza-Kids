import "../styles/Programs.css";
import daycareImg from "../assets/t-6.jpeg";
import playgroupImg from "../assets/t-9.jpeg";
import pp1Img from "../assets/t-1.jpeg";
import pp2Img from "../assets/t-7.jpeg";

const programsData = [
  {
    number: "01",
    title: "Daycare",
    tagline: "A safe, nurturing environment for your youngest.",
    description:
      "We are committed to providing a safe, nurturing, and exciting environment where children from six weeks old learn, grow, and thrive. Our goal is to create a warm and friendly space where children feel valued, loved, and encouraged to explore their unique abilities and talents at their own pace.",
    ageGroup: "Ages 6 weeks – 2 years",
    highlights: [
      "Nutritious meals prepared daily",
      "Supervised, age-appropriate play areas",
      "Dedicated diaper changing facilities",
      "Structured rest time accommodation",
    ],
    image: daycareImg,
    imageAlt: "Daycare children in a safe play environment",
  },
  {
    number: "02",
    title: "Playgroup",
    tagline: "Learning the skills that last a lifetime — through play.",
    description:
      "Our Playgroup program provides a warm and engaging learning environment focused on basic life skills. Through daily routines and guided activities, children develop personal hygiene, independence, sharing, communication, teamwork, and self-discipline alongside essential classroom etiquettes that will serve them for years to come.",
    ageGroup: "Ages 2 – 3 years",
    highlights: [
      "Guided group play activities",
      "Language and communication development",
      "Fine motor skills through hands-on tasks",
      "Social interaction and peer bonding",
    ],
    image: playgroupImg,
    imageAlt: "Children engaged in playgroup activities",
  },
  {
    number: "03",
    title: "Pre-Primary 1",
    tagline: "First steps into literacy, numeracy, and big ideas.",
    description:
      "Under the Competency Based Education (CBE) Curriculum, our PP1 program builds a strong educational foundation for children aged 3–4 years. Foundational literacy and numeracy are introduced while curiosity, critical thinking, and problem-solving are sparked through songs, storytelling, art, movement, and hands-on learning experiences.",
    ageGroup: "Ages 3 – 4 years",
    highlights: [
      "Letter recognition and early reading",
      "Number basics and counting",
      "Creative expression through art and music",
      "Phonics introduction",
    ],
    image: pp1Img,
    imageAlt: "PP1 learners in a classroom setting",
  },
  {
    number: "04",
    title: "Pre-Primary 2",
    tagline: "Confident, ready, and excited for what comes next.",
    description:
      "Our PP2 program strengthens foundational learning and prepares children for primary education. We provide a nurturing, child-friendly environment where learners develop literacy, numeracy, creativity, and problem-solving through interactive experiences. Every child is supported individually — growing into a confident, curious learner ready for the next chapter.",
    ageGroup: "Ages 4 – 5 years",
    highlights: [
      "Advanced literacy and reading readiness",
      "Math concepts and logical thinking",
      "School transition preparation",
      "Emotional intelligence and self-regulation",
    ],
    image: pp2Img,
    imageAlt: "PP2 children preparing for primary school",
  },
];

const Programs = () => {
  return (
    <>
      <section className="programs-hero">
        <div className="programs-hero-inner">
          <p className="programs-hero-kicker">Our Programs</p>
          <div className="programs-hero-line" />
          <h1>
            Where every child<br />
            finds their <em>spark</em>
          </h1>
          <p className="programs-hero-sub">
            Four carefully crafted programs each built around how children actually learn.
          </p>
        </div>
      </section>

      {/* ── PROGRAM SECTIONS ── */}
      <div className="programs-page">
        {programsData.map((program, index) => {
          const imageLeft = index % 2 === 0;
          return (
            <section
              key={program.number}
              className={`program-section ${imageLeft ? "img-left" : "img-right"}`}
            >
              {/* Image column */}
              <div className="program-image-col">
                <img
                  src={program.image}
                  alt={program.imageAlt}
                  className="program-image"
                />
                <div className="program-image-overlay">
                  <strong>{program.title}</strong>
                </div>
              </div>

              {/* Body column */}
              <div className="program-body">
                <h2>{program.title}</h2>
                <p className="program-age">{program.ageGroup}</p>
                <p className="program-tagline">{program.tagline}</p>
                <p className="program-description">{program.description}</p>
                <p className="highlights-label">Program highlights</p>
                <ul className="highlights-list">
                  {program.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default Programs;