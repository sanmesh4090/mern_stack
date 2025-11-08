import React from "react";

function Hero() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-primary">
        Institute Code : 06250
      </h1>

      <h3 className="text-center mb-4">
        Courses Offered
      </h3>

      <table className="table table-bordered table-striped">
        <thead className="table-primary">
          <tr>
            <th>Sr. No.</th>
            <th>Name of Courses</th>
            <th>Sanctioned Intake</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Chemical Engineering</td>
            <td>60</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Civil Engineering</td>
            <td>120</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Computer Science and Engineering</td>
            <td>360</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Computer Science and Engineering (Artificial Intelligence and Machine Learning)</td>
            <td>180</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Computer Science and Engineering (Data Science)</td>
            <td>180</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Electronics and Telecommunication Engineering</td>
            <td>120</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Mechanical Engineering</td>
            <td>120</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Hero;
