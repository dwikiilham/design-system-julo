import React from "react";
import PropTypes from  "prop-types";

function LightFooterA(props) {
  return (
        <footer className="mt-0">
          <div className="container border-t md:px-4 md:pt-10 md:pb-5 mx-auto">
            <div className="flex flex-wrap mx-auto">
              <section className="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/2">
                <article className="md:text-left text-center">
                  <img className="mb-4 mx-auto md:mx-0 mt-4 md:mt-0" src="http://localhost:9050/img/logo-julo-colored.svg" />
                  <p className="font-bold mb-3">PT. JULO Teknologi Finansial</p>
                  <p>88@Kasablanka Tower A Lantai 5. Jl. Raya Casablancal</p>
                  <p>Kav.88, Jakarta Selatan 12870</p>
                  <div className="my-3 pt-3 md:text-left text-center">
                    <a href="mailto:cs@julo.co.id" className="w-fill flex rounded-lg mt-3 font-bold justify-center md:justify-start">
                      <img src=" /img/icons/mail.svg" className="mx-0 md:mb:0 mb-3" /> &nbsp;cs@julo.co.id
                    </a>
                    <a href="tel:+62 21 762761" className="w-fill flex rounded-lg mt-3 font-bold justify-center md:justify-start">
                      <img src=" /img/icons/phone.svg" className="mx-0 md:mb:0 mb-3" /> &nbsp;+62 21 762761
                    </a>
                    <p className="font-bold mt-4 mb-2">Terdaftar &amp; Diawasi Oleh</p>
                    <div className="flex items-stretch md:text-left text-center justify-center md:justify-start">
                      <img src="/img/icons/ojk-julo.svg" className="pr-4" />
                      <img src="/img/icons/afpi-julo.svg" className="pr-4" />
                      <img src="/img/icons/iso-julo.svg" className="pr-4" />
                    </div>
                  </div>
                </article>
              </section>
              <section className="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/2 ">
                <div className="flex flex-wrap mx-auto ">
                  <section className="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-2/4 ">
                    <div className="md:hidden ">
                      <button onclick="toggleFooterSection(event) " className="font-bold tracking-wider font-bold focus:outline-none border-t border-white py-4 w-full text-left " type="button ">
                        Tentang Perusahaan
                      </button>
                    </div>
                    <p className="font-bold tracking-wider font-bold hidden md:block " href="# ">
                      Tentang Perusahaan
                    </p>
                    <article className="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden ">
                      <ul className="my-5 text-sm text-center md:text-left tracking-wide ">
                        <li className="my-3 tracking-wide ">
                          <a href="# ">Tentang Julo</a>
                        </li>
                        <li className="my-3 tracking-wide ">
                          <a href="# ">Tim Julo</a>
                        </li>
                        <li className="my-3 tracking-wide ">
                          <a href="# ">Event</a>
                        </li>
                        <li className="my-3 tracking-wide ">
                          <a href="# ">Statistik</a>
                        </li>
                        <li className="my-3 tracking-wide ">
                          <a href="# ">Karir</a>
                        </li>
                      </ul>
                    </article>
                  </section>
                  <section className="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-2/4 ">
                    <div className="md:hidden ">
                      <button onclick="toggleFooterSection(event) " className="font-bold tracking-wider font-bold focus:outline-none border-t border-white py-4 w-full text-left " type="button ">
                        Bantuan
                      </button>
                    </div>
                    <p className="font-bold tracking-wider font-bold hidden md:block " href="# ">
                      Bantuan
                    </p>
                    <article className="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden ">
                      <ul className="my-5 text-sm tracking-wide text-center md:text-left ">
                        <li className="my-3 tracking-wide">
                          <a href="# ">Kebijakan Privasi</a>
                        </li>
                        <li className="my-3 tracking-wide">
                          <a href="# ">Syarat &amp; Ketentuan</a>
                        </li>
                        <li className="my-3 tracking-wide">
                          <a href="# ">Laporan Penipuan</a>
                        </li>
                        <li className="my-3 tracking-wide">
                          <a href="# ">FAQ</a>
                        </li>
                      </ul>
                    </article>
                  </section>
                  <section className="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-2/4 ">
                    <article className="md:text-left text-center mb-3">
                      <p className="font-bold mb-3 mt-4 md:mt-0">Aplikasi Julo</p>
                      <img className="mb-4 mx-auto md:mx-0 mt-4 md:mt-0" src="https://www.julo.co.id/assets/images/icon/playstore.png" />
                    </article>
                  </section>
                  <section className="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-2/4 ">
                    <p className="md:text-left font-bold text-center mb-3 mt-4 md:mt-0">Social Media Julo</p>
                    <div className="flex items-stretch md:text-left text-center justify-center md:justify-start">
                      <a href="#">
                        <img src="/img/icons/social-media/instagram.svg" className="pr-4" />
                      </a>
                      <a href="#">
                        <img src="/img/icons/social-media/facebook.svg" className="pr-4" />
                      </a>
                      <a href="#">
                        <img src="/img/icons/social-media/twitter.svg" className="pr-4" />
                      </a>
                      <a href="#">
                        <img src="/img/icons/social-media/linkedin.svg" className="pr-4" />
                      </a>
                      <a href="#">
                        <img src="/img/icons/social-media/youtube.svg" className="pr-4" />
                      </a>
                      <a href="#">
                        <img src="/img/icons/social-media/tiktok.svg" className="pr-4" />
                      </a>
                    </div>
                  </section>
                </div>
              </section>
            </div>
          </div>
          <div className="max-w-screen-lg mx-auto border-none px-4 ">
            <section className="flex flex-col md:flex-row md:justify-between md:border-solid md:border-t text-gray-700 font-light text-sm pt-4 pb-6 md:pt-5 md:pb-6 w-full ">
              <div>
                <p className="leading-8 tracking-wide ">
                  © PT JULO Teknologi Finansial - All Rights Reserved
                </p>
              </div>
              <div>
                <p className="leading-8 tracking-wide ">Privacy Policy</p>
              </div>
            </section>
          </div>
        </footer>
  );
}

LightFooterA.defaultProps = {
  theme: 'indigo'
};

LightFooterA.propTypes = {
  theme: PropTypes.string.isRequired
};

export default LightFooterA;