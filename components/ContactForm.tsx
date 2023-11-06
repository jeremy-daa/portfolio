"use client";
import React, { useState } from "react";
import SocialLink from "./SocialLink";
import { GoMail } from "react-icons/go";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactForm = () => {
  const Socials = [
    {
      href: "mailto:ermiyas.dagnachew@gmail.com",
      icon: <GoMail />,
      text: "Email",
    },
    {
      href: "https://instagram.com/yirmeyahu.63?igshid=NzZlODBkYWE4Ng==",
      icon: <FaInstagram />,
      text: "Instagram",
    },
    {
      href: "https://github.com/jeremy-daa",
      icon: <FaGithub />,
      text: "Github",
    },
    {
      href: "https://www.linkedin.com/in/ermiyas-dagnachew-amberbir-0b3883244/",
      icon: <FaLinkedin />,
      text: "Linkedin",
    },
  ];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const openSuccessModal = () => {
    document.getElementById("successModal")?.style.setProperty("opacity", "1");
    setTimeout(() => {
      document
        .getElementById("successModal")
        ?.style.setProperty("opacity", "0");
    }, 3000);
  };

  const openFailureModal = () => {
    document.getElementById("failureModal")?.style.setProperty("opacity", "1");
    setTimeout(() => {
      document
        .getElementById("failureModal")
        ?.style.setProperty("opacity", "0");
    }, 3000);
  };
  return (
    <div className="container flex flex-col bg-[var(--white-transparent)] boxshadow justify-center items-center md:p-10 p-5 md:w-[70%] w-[90%]">
      <h1 className="md:text-4xl text-2xl capitalize md:w-[80%] w-[95%] text-center leading-[3rem] font-mono">
        Hey, glad you decided to reach out fill out the form or use one of my
        social links
      </h1>
      <div className="md:w-[80%] w-full flex md:justify-evenly justify-center items-center p-3 my-10 md:flex-nowrap flex-wrap gap-5">
        {Socials.map((social, index) => (
          <SocialLink
            key={index}
            href={social.href}
            icon={social.icon}
            text={social.text}
            mono={true}
          />
        ))}
      </div>
      <form
        className="flex flex-col gap-5 w-full md:w-[80%] w-full"
        method="POST"
        onSubmit={async (e) => {
          const form = e.target as HTMLFormElement;
          e.preventDefault();
          try {
            const res = await fetch("/api/contact", {
              method: "POST",
              body: JSON.stringify({
                name,
                email,
                message,
              }),
            });
            if (res.ok) {
              form.reset();
              console.log(res);
              openSuccessModal();
            } else {
              console.log(res);
              openFailureModal();
            }
          } catch (error) {
            console.log(error);
            openFailureModal();
          }
        }}
      >
        <input
          className="p-3 rounded-md bg-[var(--white)] text-[var(--black)] font-mono boxshadow focus:outline-[var(--theme)] duration-300 tracking-widest"
          type="text"
          name="name"
          required
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          className="p-3 rounded-md bg-[var(--white)] text-[var(--black)] font-mono boxshadow focus:outline-[var(--theme)] duration-300 tracking-widest"
          type="email"
          name="email"
          required
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <textarea
          className="p-3 rounded-md bg-[var(--white)] text-[var(--black)] font-mono boxshadow resize-none focus:outline-[var(--theme)] duration-300 tracking-widest"
          name="message"
          id=""
          cols={30}
          rows={4}
          required
          placeholder="Message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
        <button className="p-3 rounded-md bg-[var(--theme)] text-[var(--white)] hover:bg-[var(--white)] hover:text-[var(--theme)] duration-200">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
