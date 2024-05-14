import React from "react";
import Wrapper from "../assets/wrappers/AboutUs";
import PasFotoJihan from "../assets/images/PasFotoJihan.jpg";
import PasFotoJames from "../assets/images/PasFotoJames.png";

export const AboutUs = () => {
  return (
    <Wrapper id="about">
      <section className="container-section">
        <div className="text-judul">
          <h1>Mau Kenalan ?</h1>
        </div>
        <div className="kartu">
          <div className="container-content">
            <section className="container-kartu">
              <div className="container-image">
                <img className="image" src={PasFotoJihan} alt="" />
              </div>
              <div className="container-info">
                <h1 className="nama">Jihan Rabbani</h1>
                <p className="nim">21.11.4067</p>
                <p className="role">GLADIATOR</p>
              </div>
            </section>
          </div>

          <div className="container-content">
            <section className="container-kartu">
              <div className="container-image">
                <img className="image" src={PasFotoJames} alt="" />
              </div>
              <div className="container-info">
                <h1 className="nama">James Januard</h1>
                <p className="nim">21.11.4184</p>
                <p className="role">GLADIATOR</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
