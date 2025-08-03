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
         Halo! Saya Muhammad Aldri Saputra, mahasiswa Program Studi Informatika di Institut Teknologi Kalimantan. Saya memiliki semangat tinggi dalam belajar dan berkarya di bidang teknologi, terutama dalam pengembangan antarmuka pengguna (front-end). Fokus utama saya adalah membangun tampilan web yang menarik, responsif, dan interaktif menggunakan React.js dan Tailwind CSS sebagai teknologi utama. Sebelum menempuh pendidikan di perguruan tinggi, saya belajar di SMKN 1 Balikpapan, jurusan Teknik Komputer dan Jaringan (TKJ), yang menjadi dasar kuat bagi ketertarikan saya terhadap dunia IT dan pengembangan web. Saya telah mengerjakan beberapa proyek pribadi, seperti website portofolio ini, sebagai wadah eksplorasi kemampuan saya. Di luar akademik, saya aktif dalam organisasi dan berbagai kepanitiaan kampus, yang membantu saya mengasah soft skill dan kemampuan bekerja dalam tim.
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
