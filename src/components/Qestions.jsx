import React from 'react';
import styled from 'styled-components';

const Qestions = () => {

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
             
            this.classList.toggle("active");
            
            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            console.log(panel);
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }


    return <Wrapper>
        <h2 className='h2'>Questions About Me</h2>

        <button className="accordion">Section 1 <div className="onclick">+</div></button>
        <div className="panel">
            <p>Lorem ipsum...</p>
        </div>

        <button className="accordion">Section 2<div className="onclick">+</div></button>
        <div className="panel">
            <p>Lorem ipsum...</p>
        </div>

        <button className="accordion">Section 3<div className="onclick">+</div></button>
        <div className="panel">
            <p>Lorem ipsum...</p>
        </div>
    </Wrapper>;
}
const Wrapper = styled.section`
padding : 0rem 4.5rem;

.accordion {
    diplay : inline;
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
}
.onclick{
    display: inline;
    float: right;
    font-size: 30px;
}
.accordion:after{
    contect: /002b;
}

.active, .accordion:hover {
  background-color: #ccc;
}

.panel {
  padding: 0 18px;
  background-color: white;
  display: none;
  overflow: hidden;
}
    
`;
export default Qestions;