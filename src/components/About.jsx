import { useEffect, useRef, useState } from "react";
import "../styles/About.css";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

function About() {
  const pRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Akan aktif ketika 50% paragraf terlihat
    );

    if (pRef.current) observer.observe(pRef.current);

    return () => {
      if (pRef.current) observer.unobserve(pRef.current);
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="wrapper">
        <h3 className="about-title">About Me</h3>
        <p
          ref={pRef}
          className={visible ? "fade-in-text" : "fade-out-text"}
        >
         Halo! Saya Muhammad Aldri, mahasiswa Informatika yang memiliki semangat tinggi dalam belajar dan berkarya di dunia teknologi. Fokus utama saya adalah pada pengembangan frontend menggunakan React JS dan Tailwind CSS. Saya senang mempelajari cara membuat antarmuka yang menarik, responsif, dan interaktif. Saya telah menyelesaikan beberapa proyek pribadi, seperti website portofolio ini, dan aktif mengikuti kegiatan kampus seperti organisasi dan beberapa kepanitiaan. Saya selalu terbuka untuk belajar hal baru dan saat ini sedang mencari pengalaman kerja magang atau proyek kolaboratif yang bisa menambah wawasan serta keterampilan saya.
        </p>
        <h4>Progamming Languenge & Tools</h4>
        <div className="skills">
          <FaHtml5 className="html"/>
          <FaReact className="react"/>
          <IoLogoJavascript className="js"/>
          <VscVscode className="vscode"/>
          <RiTailwindCssFill className="tailwind"/>
          <FaGithub className="github"/>
          <FaJava className="java"/>
          <FaPython className="python"/>

        </div>
      </div>
    </section>
  );
}

export default About;
