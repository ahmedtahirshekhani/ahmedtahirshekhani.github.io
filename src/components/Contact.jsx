import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import email from "../assets/icons/email.jpeg";
import linkedin from "../assets/icons/linkedin.avif";
import phone from "../assets/icons/phone.jpg";
import stackoverflow from "../assets/icons/stackoverflow.png";
import github from "../assets/github.png";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "AhmedTahirShekhani",
          from_email: form.email,
          to_email: "ahmedtahir2000@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <div>
          <p >If you are amazed by my creations and wanting me to build you a website of your imaginations, proceed with your details about project , specifications and reward.</p>
          <br></br>
          <table>
          <ul className={styles.sectionSubText} > E-mail:</ul>
          <div className="container space-x-4"> <img src={email} height="20px" width="30px" ></img><a href="mailto:ahmedtahir2000@gmail.com">ahmedtahir2000@gmail.com</a></div>
          <ul className={styles.sectionSubText} > Phone:</ul>
          <div className="container space-x-4"> <img src={phone} height="20px" width="30px" ></img><a href="tel:0092-321-25-75665">0092-321-25-75665</a></div>
         </table>
         <div className="container bhai space-x-12">
          <a href="https://github.com/ahmedtahirshekhani"><img src={github} height="100px" width="50px"></img> </a>
          <a href="https://stackoverflow.com/users/12695074/ahmed-tahir-shekhani"><img src={stackoverflow} height="100px" width="50px"></img> </a>
          <a href="https://www.linkedin.com/in/ahmedtahirshekhani/"><img src={linkedin} height="100px" width="50px"></img> </a>
         </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
