import "../styles/Contact.css";
import schoolImg from "../assets/gate.jpeg";

const Contact = () => {
  return (
    <section className="contact">

      <div className="contact-header">
        <h2>Come find <em>us</em></h2>
        <p>Visit us, call us, or send us a message.</p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <div className="contact-row">
            <div>
              <p>Location</p>
              <p className="contact-row-value">
                7th Riverview Avenue, Imani Estate<br />
                along Ruiru-Githunguri Road
              </p>
            </div>
          </div>

          <div className="contact-row">
            <div className="contact-row-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 2.09 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div className="contact-row-text">
              <p className="contact-row-label">Phone</p>
              <p className="contact-row-value">
                <a href="tel:0723051405">0723 051 405</a>
              </p>
            </div>
          </div>

          <div className="contact-row">
            <div className="contact-row-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div className="contact-row-text">
              <p className="contact-row-label">Email</p>
              <p className="contact-row-value">
                <a href="mailto:tunzakidsacademy@gmail.com">
                  tunzakidsacademy@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Opening hours */}
          <div className="contact-hours">
            <p className="contact-hours-label">Opening hours</p>
            <div className="hours-grid">
              <div className="hours-row highlight">
                <span>Monday – Friday</span>
                <span>7:00 am – 6:00 pm</span>
              </div>
              <div className="hours-row">
                <span>Saturday</span>
                <span>8:00 am – 2:00 pm</span>
              </div>
              <div className="hours-row">
                <span>Sunday &amp; Public Holidays</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right — School image */}
        <div className="image-col">
          <div className="image-wrapper">
            <img
              src={schoolImg}
              alt="Tunza Kids Academy"
              className="contact-school-img"
            />
          </div>
        </div>

      </div>

      {/* ── Full-width Map below ── */}
      <div className="contact-map-section">
        <p className="contact-map-label">Find us on the map</p>
        <div className="contact-map-wrapper">
          <iframe
            title="Tunza Child Hub Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0307634148035!2d36.94110721051989!3d-1.1384374988458634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f47a825b67833%3A0x47677028d2966214!2sTunza%20Child%20Hub!5e0!3m2!1sen!2ske!4v1779262848319!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

    </section>
  );
};

export default Contact;