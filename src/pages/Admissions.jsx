import { useState } from "react";
import "../styles/Admission.css";

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

  const [status, setStatus]     = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isDaycare = formData.program === "daycare";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "program" ? { classes: "" } : {}),
    }));
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

      <div className="admissions-header">
        <h1>Admissions &amp; <em>Enrolment</em></h1>
        <p>
          Admissions are ongoing across all programs. We invite parents and guardians
          to visit our school during weekdays within working hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="admission-form" noValidate>

        <p className="form-title">Enquiry Form</p>

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

        {/* ── Row: Parent + Email ── */}
        <div className="form-row">
          <div className="form-field">
            <label className="field-label" htmlFor="parentName">Parent / Guardian Name *</label>
            <input
              id="parentName" type="text" name="parentName"
              placeholder="e.g. Jane Wanjiku"
              value={formData.parentName} onChange={handleChange} required
            />
          </div>
          <div className="form-field">
            <label className="field-label" htmlFor="email">Email Address *</label>
            <input
              id="email" type="email" name="email"
              placeholder="you@example.com"
              value={formData.email} onChange={handleChange} required
            />
          </div>
        </div>

        {/* ── Row: Phone + Student Name ── */}
        <div className="form-row">
          <div className="form-field">
            <label className="field-label" htmlFor="phone">Phone Number *</label>
            <input
              id="phone" type="tel" name="phone"
              placeholder="07XX XXX XXX"
              value={formData.phone} onChange={handleChange} required
            />
          </div>
          <div className="form-field">
            <label className="field-label" htmlFor="studentName">Student Name *</label>
            <input
              id="studentName" type="text" name="studentName"
              placeholder="Child's full name"
              value={formData.studentName} onChange={handleChange} required
            />
          </div>
        </div>

        {/* ── Row: Age + Program ── */}
        <div className="form-row">
          <div className="form-field">
            <label className="field-label" htmlFor="studentAge">Student Age *</label>
            <input
              id="studentAge" type="number" name="studentAge"
              placeholder="Age in years"
              min="0" max="10"
              value={formData.studentAge} onChange={handleChange} required
            />
          </div>
          <div className="form-field">
            <label className="field-label" htmlFor="program">Select Program *</label>
            <select id="program" name="program" value={formData.program} onChange={handleChange} required>
              <option value="">Choose a program…</option>
              <option value="daycare">Daycare (From 1 year old)</option>
              <option value="playgroup">Playgroup ( Age 3)</option>
              <option value="pp1">Pre Primary 1 (Age 4 - 5)</option>
              <option value="pp2">Pre Primary 2 (Age 5 - 6)</option>
            </select>
          </div>
        </div>

        {/* ── Daycare only: preferred class ── */}
        {isDaycare && (
          <div className="form-field form-field--full daycare-class-field">
            <label className="field-label">Preferred Class *</label>
            <div className="class-options">

              {/* Full Day card */}
              <label
                className={`class-card ${formData.classes === "fullday" ? "class-card--active" : ""}`}
                onClick={() => setFormData((prev) => ({ ...prev, classes: "fullday" }))}
              >
                <input
                  type="radio"
                  name="classes"
                  value="fullday"
                  checked={formData.classes === "fullday"}
                  onChange={handleChange}
                />
                <span className="class-card-title">Full Day</span>
                <span className="class-card-time">7:00 AM – 6:00 PM</span>
              </label>

              {/* Half Day card */}
              <label
                className={`class-card ${formData.classes === "halfday" ? "class-card--active" : ""}`}
                onClick={() => setFormData((prev) => ({ ...prev, classes: "halfday" }))}
              >
                <input
                  type="radio"
                  name="classes"
                  value="halfday"
                  checked={formData.classes === "halfday"}
                  onChange={handleChange}
                />
              
                <span className="class-card-title">Half Day</span>
                <span className="class-card-time">7:00 AM – 12:00 PM</span>
              </label>

            </div>
          </div>
        )}

        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Submitting…" : "Submit Application →"}
        </button>

      </form>

    </section>
  );
};

export default Admissions;