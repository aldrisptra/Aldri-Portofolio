import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "../styles/Kontak.css";

function Kontak() {
  const form = useRef();
  const sectionRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    const newErrors = {};
    if (!name) newErrors.name = "Nama harus diisi.";
    if (!email) newErrors.email = "Email harus diisi.";
    if (!message) newErrors.message = "Pesan tidak boleh kosong.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    emailjs
      .sendForm(
        "service_14gnyk5",
        "template_b1o8jrn",
        form.current,
        "aXkzoUWl7b34QO_MS"
      )
      .then(
        () => {
          alert("Pesan berhasil dikirim!");
          form.current.reset();
        },
        () => {
          alert("Terjadi kesalahan, coba lagi.");
        }
      );
  };

  return (
    <section
      id="kontak"
      ref={sectionRef}
      className={`kontak ${isVisible ? "fade-in-text" : "fade-out-text"}`}
    >
      <div className="wrapper" ref={sectionRef}>
        <h3 className="kontak-title">Kontak</h3>
        <p className="subjudul">Hubungi saya di sini</p>
        <form ref={form} onSubmit={sendEmail} className="kontak-form">
          <div className="form-group">
            <input type="text" name="user_name" placeholder="Nama Lengkap" />
            {errors.name && <p className="error-msg">{errors.name}</p>}
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              onInvalid={(e) =>
                e.target.setCustomValidity("Masukkan format email yang benar.")
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />
            <textarea name="message" rows="6" placeholder="Pesan kamu..." />
            {errors.message && <p className="error-msg">{errors.message}</p>}
            <button type="submit">Kirim Pesan</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Kontak;
