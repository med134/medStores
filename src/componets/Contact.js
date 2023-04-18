import React from "react";
import { useState } from "react";
import "./css_files/showProduct.css";
import emailjs from "@emailjs/browser";
import { BsXLg } from "react-icons/bs";
import AnimatePage from "../animation/AnimatePage";
import { useTranslation } from "react-i18next";

const ResultAlert = ({ RemoveAlert }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="h-20 px-8 bg-green-400 text-white flex justify-between rounded mt-5">
      <div className="flex items-center bg-transparent">
        <svg className="h-5 w-5 mr-6 fill-white bg-transparent storke-4">
          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
        </svg>
        <p className="bg-transparent font-bold">{t("successSent")}</p>
      </div>
      <button className="text-white hover:text-blue-800" onClick={RemoveAlert}>
        <BsXLg />
      </button>
    </div>
  );
};

function Contact() {
  const { t, i18n } = useTranslation();
  const RemoveAlert = () => {
    setResult(false);
  };
  const [result, setResult] = useState(false);
  const [checked, setChecked] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    if (checked === false) {
      e.preventDefault();
      alert("failed send ? please agree to the send me copy of this message! ");
    } else {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_l2ksv8s",
          "template_8s4azuh",
          e.target,
          "o5kuPMl1cvJzFGjkm"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      setResult(true);
    }
  };
  return (
    <>
      {/* Container for demo purpose */}
      <AnimatePage>
        <div className="container my-24 px-6 mx-auto">
          {/* Section: Design Block */}
          <section className=" text-gray-800">
            <div
              className="bgContactUs relative overflow-hidden bg-no-repeat bg-cover"
              style={{
                backgroundPosition: "50%",
                height: 300,
              }}
            ></div>
            <div className="container text-gray-800 px-4 md:px-12">
              <div
                className="block rounded-lg shadow-lg py-10 md:py-12 px-4 md:px-6"
                style={{
                  marginTop: "-100px",
                  background: "hsla(0, 0%, 100%, 0.8)",
                  backdropFilter: "blur(30px)",
                }}
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6">
                  <div className="lg:mb-0 text-center mx-auto">
                    <a
                      href="https://goo.gl/maps/oevpwbCtZ7inta9M7"
                      target="blank"
                    >
                      <svg
                        className="w-8 h-8 text-blue-500 mb-6 mx-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                      >
                        {/* Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
                        <path
                          fill="currentColor"
                          d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                        />
                      </svg>
                    </a>
                    <h6 className="font-medium">Morooco</h6>
                  </div>
                  <div className="lg:mb-0 text-center mx-auto">
                    <a
                      href="https://goo.gl/maps/wyQheAJise1i9MTs5"
                      target="blank"
                    >
                      <svg
                        className="w-8 h-8 text-blue-500 mb-6 mx-auto cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path
                          fill="currentColor"
                          d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                        />
                      </svg>
                    </a>
                    <h6 className="font-medium">Benguerir, 43150</h6>
                  </div>
                  <div className="mb-6 md:mb-0 text-center mx-auto">
                    <a href="tel: +212600462196">
                      <svg
                        className="w-8 h-8 text-blue-500 mb-6 mx-auto cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                        />
                      </svg>
                    </a>
                    <h6 className="font-medium">+ 212 00 46 21 96</h6>
                  </div>
                </div>
                <div className="max-w-[700px] mx-auto">
                  <form onSubmit={sendEmail}>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        name="fullName"
                        className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInput7"
                        placeholder={t("name")}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="email"
                        name="email"
                        required
                        className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInput8"
                        placeholder={t("yourEmail")}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <textarea
                        required
                        name="message"
                        className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                        id="exampleFormControlTextarea13"
                        rows={3}
                        placeholder={t("message")}
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group form-check text-center mb-2">
                      <input
                        type="checkbox"
                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-5 cursor-pointer"
                        id="exampleCheck87"
                        defaultChecked=""
                        onChange={() => {
                          setChecked(!checked);
                        }}
                      />
                      <label
                        className="form-check-label text-gray-800"
                        htmlFor="exampleCheck87"
                      >
                        {t("sentCopy")}
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="
      w-full
      px-6
      py-2.5
      bg-gradient-to-r from-blue-400 to-sky-400
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
                    >
                      {t("sent")}
                    </button>
                    <div className="row">
                      {result && checked ? (
                        <ResultAlert RemoveAlert={RemoveAlert} />
                      ) : null}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </AnimatePage>
    </>
  );
}

export default Contact;
