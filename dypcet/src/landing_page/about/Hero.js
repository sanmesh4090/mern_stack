import React from "react";

function Hero() {
  return (
    <section
      className="text-center text-dark py-5"
      style={{
        background: "linear-gradient(135deg, #ffffff 40%, #e6f0ff 100%)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem",
      }}
    >
      {/* Hero Image */}
      <img
        src="./images/abouthero.jpg"
        alt="College Campus"
        className="img-fluid rounded-4 shadow"
        style={{
          width: "70%",
          maxWidth: "800px",
          marginBottom: "2rem",
        }}
      />

      {/* Hero Text */}
      <div className="container">
        <h2
          className="fw-bold mb-4"
          style={{
            color: "royalblue",
            fontFamily: "Poppins, sans-serif",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          D. Y. Patil College of Engineering & Technology, Kolhapur
        </h2>

        <p
          className="lead text-muted text-justify mx-auto"
          style={{
            maxWidth: "900px",
            lineHeight: "1.8",
            fontSize: "1.05rem",
          }}
        >
          D. Y. Patil College of Engineering & Technology, Kasaba Bawada,
          Kolhapur is a self-financing Autonomous Institute established in the
          year 1984 under the visionary leadership of Padmashree Dr. D. Y.
          Patil, Former Governor of Tripura, Bihar and West Bengal. UGC, New
          Delhi and Shivaji University, Kolhapur has conferred Autonomous status
          to the Institute in 2020. The Institution is approved by the All India
          Council for Technical Education (AICTE), New Delhi, Government of
          Maharashtra, and affiliated with Shivaji University, Kolhapur.
          <br />
          <br />
          The Institute is accredited by the National Assessment and
          Accreditation Council (NAAC), Bangalore, with an ‘A’ grade (CGPA:
          3.08). It offers eight UG programmes and two PG programmes, with
          recognized research centres fostering innovation and excellence.
          <br />
          <br />
          The Architecture Department is ranked among the top 13 Architecture
          Colleges in India by Outlook India and 21st by India Today (2021).
          Three UG programmes — B.Tech (CSE), B.Tech (E&TC), and B.Tech
          (Mechanical) — are re-accredited by NBA, New Delhi, for 2022–2025.
        </p>
      </div>
    </section>
  );
}

export default Hero;
