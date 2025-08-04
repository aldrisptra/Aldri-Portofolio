import { useEffect, useRef, useState } from "react";
import "../styles/About.css";
import { FaHtml5, FaReact, FaGithub, FaJava, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { RiTailwindCssFill } from "react-icons/ri";

function About() {
  const pRef = useRef(null);
  const skillsRef = useRef(null); // Tambahan untuk skill
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Observer untuk paragraf
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (pRef.current) observer.observe(pRef.current);

    return () => {
      if (pRef.current) observer.unobserve(pRef.current);
    };
  }, []);

  useEffect(() => {
    const icons = skillsRef.current.querySelectorAll(".icon");

    let hasAppeared = false; // status apakah pernah tampil

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.5 && !hasAppeared) {
          // Muncul satu per satu
          icons.forEach((icon, index) => {
            setTimeout(() => {
              icon.classList.add("visible");
            }, index * 150);
          });
          hasAppeared = true;
        } else if (entry.intersectionRatio < 0.5 && hasAppeared) {
          // Hilang satu per satu saat setengah keluar
          icons.forEach((icon, index) => {
            setTimeout(() => {
              icon.classList.remove("visible");
            }, index * 150);
          });
          hasAppeared = false;
        }
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="wrapper">
        <h3 className="about-title">About Me</h3>
        <p ref={pRef} className={visible ? "fade-in-text" : "fade-out-text"}>
          Halo! Saya Muhammad Aldri Saputra, mahasiswa Program Studi Informatika
          di Institut Teknologi Kalimantan. Saya memiliki semangat tinggi dalam
          belajar dan berkarya di bidang teknologi, terutama dalam pengembangan
          antarmuka pengguna (front-end). Fokus utama saya adalah membangun
          tampilan web yang menarik, responsif, dan interaktif menggunakan
          React.js dan Tailwind CSS sebagai teknologi utama. Sebelum menempuh
          pendidikan di perguruan tinggi, saya belajar di SMKN 1 Balikpapan,
          jurusan Teknik Komputer dan Jaringan (TKJ), yang menjadi dasar kuat
          bagi ketertarikan saya terhadap dunia IT dan pengembangan web. Saya
          telah mengerjakan beberapa proyek pribadi, seperti website portofolio
          ini, sebagai wadah eksplorasi kemampuan saya. Di luar akademik, saya
          aktif dalam organisasi dan berbagai kepanitiaan kampus, yang membantu
          saya mengasah soft skill dan kemampuan bekerja dalam tim.
        </p>

        <h4>Programming Language & Tools</h4>
        <div className="skills" ref={skillsRef}>
          <FaHtml5 className="icon html" />
          <FaReact className="icon react" />
          <IoLogoJavascript className="icon js" />
          <VscVscode className="icon vscode" />
          <RiTailwindCssFill className="icon tailwind" />
          <FaGithub className="icon github" />
          <FaJava className="icon java" />
          <FaPython className="icon python" />
        </div>
      </div>
    </section>
  );
}

export default About;
