import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact">

      {/* ── Header ── */}
      <div className="contact-header">
        <h2>Come find <em>us</em></h2>
        <p>
          Visit us, call us, or send us a
          message.
        </p>
      </div>

      <div className="contact-container">

        {/* ── Left — Contact details ── */}
        <div className="contact-info">

          <div className="contact-row">
            <div className="contact-row-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>
            <div>
              <p className="contact-row-label">Location</p>
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
            <div>
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
            <div>
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
                <span>6:30 am – 6:00 pm</span>
              </div>
              <div className="hours-row">
                <span>Saturday</span>
                <span>7:00 am – 1:00 pm</span>
              </div>
              <div className="hours-row">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

        </div>

        {/* ── Right — Map ── */}
        <div className="map-col">
          <div className="map-wrapper">
            <iframe
              title="Tunza Kids Academy Location"
              src="https://www.google.com/maps?q=Ruiru-Githunguri+Road,+Imani+Estate,+Kenya&output=embed"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="map-caption">
            7th Riverview Avenue, Imani Estate, Ruiru-Githunguri Road
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;