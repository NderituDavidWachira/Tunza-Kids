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
      "At our daycare facility, we are committed to providing a safe, nurturing, and exciting environment for children from 1 year old where they learn, grow, and thrive. We understand that the early years are essential for building a strong foundation for future success therefore our goal is to create a warm and friendly space where children feel valued, loved, and encouraged to explore their unique abilities and talents. Working daily from 7:00 a.m. to 6:00 p.m., our daycare is intended to support families by offering reliable, flexible (half day or full day) and affordable childcare services throughout the day. We provide a structured yet enjoyable routine that balances play, rest, and interaction. We engage children in various activities: creative play, storytelling, music, and hands-on experiences which enhance confidence, interest, independence, and positive social skills.We endeavor to maintain a clean, secure, and inclusive environment where every child feels comfortable and protected.",
    ageGroup: "From 1 year old,",
   
    image: daycareImg,
    imageAlt: "Daycare children in a safe play environment",
  },
  {
    number: "02",
    title: "Playgroup",
    tagline: "Learning the skills that last a lifetime — through play.",
    description:
      "Playgroup program provides a warm and engaging learning environment designed for children aged 3 years. At this stage we major in training children basic life skills. Through daily routines and guided activities, they learn basic skills like personal hygiene, independence, sharing, communication, teamwork, respect, and self-discipline. We also introduce learners to basic learning etiquettes including: listening attentively, following instructions, participating in class activities, and interacting respectfully with teachers and peers.",
    ageGroup: "Age 3 ",
   
    image: playgroupImg,
    imageAlt: "Children engaged in playgroup activities",
  },
  {
    number: "03",
    title: "Pre-Primary 1",
    tagline: "First steps into literacy, numeracy, and big ideas.",
    description:
      "Our Pre-Primary One program under the Competency Based Education (CBE) Curriculum is designed to provide a strong educational foundation for children aged 4-5 years. The learners are introduced to foundational literacy and numeracy skills while encouraging curiosity, critical thinking, and problem-solving through songs, storytelling, play, art, movement activities, and hands-on learning. We focus on developing core competencies such as communication and collaboration, self-efficacy, digital literacy, creativity, and citizenship. Our well trained teachers guide learners with patience and understanding, ensuring that every child progresses at their own pace and feels motivated to learn. We believe that every child learns at their own pace, and we work closely with parents to ensure holistic development.",
    ageGroup: "Age 4 - 5",
   
    image: pp2Img,
    imageAlt: "PP1 learners in a classroom setting",
  },
  {
    number: "04",
    title: "Pre-Primary 2",
    tagline: "Confident, ready, and excited for what comes next.",
    description:
      "Our Pre-Primary Two (PP2) program under the Competency Based Education (CBE) Curriculum is designed for children aged 5–6 years to strengthen foundational learning and prepare them for primary education. We provide a nurturing, child-friendly environment where learners develop literacy, numeracy, communication, creativity, and problem-solving skills through interactive and practical learning experiences. Our teachers support every learner according to their individual learning needs, ensuring they grow into confident, curious, and responsible learners ready for the transition to primary school.",
    ageGroup: "Age 5 - 6",
   
    image: pp1Img,
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
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default Programs;