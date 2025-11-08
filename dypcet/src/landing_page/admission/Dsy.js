import React from "react";

function Dsy() {
  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">
        Courses Offered (Direct Second Year)
      </h2>

      <table className="table table-bordered table-striped">
        <thead className="table-primary">
          <tr>
            <th>Sr. No.</th>
            <th>Name of Courses</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Chemical Engineering</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Civil Engineering</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Computer Science and Engineering</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Computer Science and Engineering (Artificial Intelligence and Machine Learning)</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Computer Science and Engineering (Data Science)</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Electronics and Telecommunication Engineering</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Mechanical Engineering</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Dsy;
