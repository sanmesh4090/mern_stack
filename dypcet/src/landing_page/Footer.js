import React from "react";

function Footer() {
  return (
    <div className="container-fluid p-5 bg-secondary  text-white">
      <div className="row">
        <div className="col-2 p-5 " style={{textDecoration:"none"}}>
          
            <a href="">About</a>
            <br /> <br />
            <a href="">Internal Committee</a>
            <br /> <br />
            <a href="">Admission</a>
            <br /> <br />
            <a href="">Alumni</a>
            <br /> <br />
        
        </div>
         <div className="col-2 p-5 ">
          
            <a href="">Departments</a>
            <br /> <br />
            <a href="">Training & Placement</a>
            <br /> <br />
            <a href="">Culture</a>
            <br /> <br />
            <a href="">Application Form</a>
            <br /> <br />
        
        </div>

        <div className="col-4 text-center p-5">
          <img src="./images/footerLogo.png" style={{ width: "50%" }}></img>
        </div>

        <div className="col-4 p-5">
            <p>D.Y.Patil College of Engineering and Technology ,Kasaba Bawda</p>
            <p>Email : info.dypcet@dypgroup.edu.in</p>
            <p>Tel: 0231-2601431/32/33</p>
            <p>Send your resumes for Jobs:career.dypcet@dypgroup.edu.in</p>
            <p>For student document verification apply through e-office</p>
            
        </div>
      </div>
      <hr/>
      <div className="p-5 text-center">
        <p>Approved by AICTE, DTE -Govt. of Maharashtra & Affiliated to Shivaji University</p>
        <p>© 2025 DYP Group.</p>
        <p>Last Updated on: September 26, 2025</p>
      </div>
    </div>
  );
}

export default Footer;
