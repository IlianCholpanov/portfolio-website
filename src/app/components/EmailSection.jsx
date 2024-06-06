/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import GithubIcon from "../../../public/github-icon.svg";
import Linkedin from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import SendEmailButton from "./SendEmailButton";

function EmailSection() {
  const form = useRef();
  const [emailStatus, setEmailStatus] = useState("none");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailStatus("sending");

    emailjs
      .sendForm("service_n03oh0n", "template_fir93tl", form.current, {
        publicKey: "-GVGaqzl4K5yQ32ED",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          setEmailStatus("success");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setEmailStatus("error");
        }
      );
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md-my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m looking for internship opportunities, feel free to reach out
          to me for collaboration.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/IlianCholpanov">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/ilian-cholpanov-a4a12428b/">
            <Image src={Linkedin} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form ref={form} className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block text-sm mb-2 font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Your email here..."
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just say hi!"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Your message here..."
            />
          </div>
          <SendEmailButton status={emailStatus} />
          {emailStatus === "success" ? (
            <p className="text-green-500 text-sm mt-2">
              Email sent succesfully
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

export default EmailSection;
