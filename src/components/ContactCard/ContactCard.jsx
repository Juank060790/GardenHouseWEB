import React from "react";
import "./contactCard.css";

const Contactcard = () => {
  return (
    <div class="container contact-cards">
      <div class="contact-card-row">
        <div class="col-lg-12 ">
          <div class="card full-card ">
            <div class="">
              <div class="card-body col-lg-12">
                <h4>Carlos Solorzano</h4>
                <div class=" mt-4 mb-3">
                  <a href="tel:+525563325887">
                    <button
                      type="button"
                      className="btn-border btn-success-rgba"
                    >
                      Call Now
                    </button>
                  </a>
                </div>
                <div>+52 55 6332 5887</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-card-row">
        <div class="col-lg-12 ">
          <div class="card full-card ">
            <div class="">
              <div class="card-body col-lg-12">
                <h4>Juan Gabriel Solorzano</h4>
                <div class=" mt-4 mb-3">
                  <a href="tel:+525552483330">
                    <button
                      type="button"
                      className="btn-border btn-success-rgba"
                    >
                      Call Now
                    </button>
                  </a>
                </div>
                <div>+52 55 5248 3330</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-card-row">
        <div class="col-lg-12 ">
          <div class="card full-card ">
            <div class="">
              <div class="card-body col-lg-12">
                <h4>Jessica Jimenez</h4>
                <div class=" mt-4 mb-3">
                  <a href="tel:+525532131438">
                    <button
                      type="button"
                      className="btn-border btn-success-rgba"
                    >
                      Call Now
                    </button>
                  </a>
                </div>
                <div>+52 55 3213 1438</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactcard;
