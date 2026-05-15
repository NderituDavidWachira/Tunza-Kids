import { useState } from "react";
import "../styles/Admission.css";

// ── Update this to match your actual domain ──────────────────
const API_URL = "https://tunzachildhub.co.ke/api/submit.php";


const Admissions = () => {
  const [formData, setFormData] = useState({
    parentName:  "",
    email:       "",
    phone:       "",
    studentName: "",
    studentAge:  "",
    program:     "",
    classes:     "",
  });

  const [status, setStatus]   = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res  = await fetch(API_URL, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({ parentName:"", email:"", phone:"", studentName:"", studentAge:"", program:"", classes:"" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Submission failed. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection.");
    }
  };

  return (
    <section className="admissions">
      <h2>Admissions &amp; Enrolment</h2>
      <p>
        Admissions are ongoing across all programs. We invite parents and guardians to visit our
        school during weekdays within working hours.
      </p>

      <form onSubmit={handleSubmit} className="admission-form" noValidate>

        {status === "success" && (
          <div className="form-alert form-alert--success">
            ✅ Application submitted successfully! We will get back to you within 2 working days.
          </div>
        )}
        {status === "error" && (
          <div className="form-alert form-alert--error">
            ⚠️ {errorMsg}
          </div>
        )}

        <input
          type="text" name="parentName"
          placeholder="Parent / Guardian Name *"
          value={formData.parentName} onChange={handleChange} required
        />
        <input
          type="email" name="email"
          placeholder="Email Address *"
          value={formData.email} onChange={handleChange} required
        />
        <input
          type="tel" name="phone"
          placeholder="Phone Number *"
          value={formData.phone} onChange={handleChange} required
        />
        <input
          type="text" name="studentName"
          placeholder="Student Name *"
          value={formData.studentName} onChange={handleChange} required
        />
        <input
          type="number" name="studentAge"
          placeholder="Student Age *"
          min="0" max="10"
          value={formData.studentAge} onChange={handleChange} required
        />

        <select name="program" value={formData.program} onChange={handleChange} required>
          <option value="">Select Program *</option>
          <option value="playgroup">Playgroup (Ages 1–2)</option>
          <option value="pp1">Pre-Primary 1 (Ages 3–4)</option>
          <option value="pp2">Pre-Primary 2 (Ages 4–5)</option>
        </select>

        <select name="classes" value={formData.classes} onChange={handleChange} required>
          <option value="">Select Preferred Class *</option>
          <option value="morning">Morning (8:00 AM – 12:00 PM)</option>
          <option value="afternoon">Afternoon (1:00 PM – 5:00 PM)</option>
        </select>

        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Submitting…" : "Submit Application"}
        </button>
      </form>

      <section className="admission-info">
        <h3>Location</h3>
        <p>7th Riverview Avenue, Imani Estate, along Ruiru-Githunguri Road</p>

        <h3>Contact</h3>
        <p>
          <a href="tel:0723051405">0723 051 405</a><br />
          <a href="mailto:tunzakidsacademy@gmail.com">tunzakidsacademy@gmail.com</a>
        </p>

        <h3>Our Promise</h3>
        <p>
          At Tunza Kids Academy, we are committed to nurturing young minds and hearts, laying a firm
          foundation for lifelong learning, character, and purpose.
        </p>
      </section>
    </section>
  );
};

export default Admissions;