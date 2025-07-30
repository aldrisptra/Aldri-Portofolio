import '../styles/Exprience.css';
import infinitevol3 from '../assets/infinitevol3.jpg';
import wp24 from '../assets/wp24.jpg';
import hutkm from '../assets/hutkm.jpg';
import infinitevol4 from '../assets/infinitevol4.jpeg';
import { BiAward } from 'react-icons/bi';

function Exprience() {
  return (
    <section id='exprience'>
      <div className='wrapper'>
        <h3 className='exprience-title'>Pengalaman</h3>

{/* -------------------------------infinitevol3----------------------- */}
        <div className='content-flex-infinitevol3'>
          <div className='image-container-infinitevol3'>
  <img src={infinitevol3} alt="Pengalaman saya" className='infinitevol3-image' />
  <a
    href="https://drive.google.com/file/d/1uzo-i8Y_xXQzUSDzAfz5n_02GD2EuQ8A/view?usp=drivesdk"
    target='_blank'
    rel='noopener noreferrer'
    className='sertifikat-badge-infinitevol3'
    title='Lihat Sertifikat'
  >
    <BiAward />
    <span>Lihat Sertifikat</span>
    </a>
</div>

          <div className='text-content-infinitevol3'>
            <h2>Infinite Vol. 3 - Staf Divisi Lomba</h2>
            <p>Tanggung jawab saya mencakup:</p>
            <ul>
              <li>Menyusun konsep teknis dan alur lomba.</li>
              <li>Berkoordinasi dengan peserta dan juri untuk kelancaran pelaksanaan lomba.</li>
              <li>Membantu dalam penjurian, dokumentasi, dan evaluasi akhir kegiatan.</li>
            </ul>
          </div>
        </div>

{/* -------------------------------bagian wp----------------------- */}
        <div className='content-flex-wp24'>
          <div className='image-container-wp24'>
  <img src={wp24} alt="Pengalaman saya" className='wp24-image' />
  <a
    href="https://drive.google.com/file/d/1WFjVKlXfU2REaF-Y3KGXlXt0hczvVDOq/view"
    target='_blank'
    rel='noopener noreferrer'
    className='sertifikat-badge-wp24'
    title='Lihat Sertifikat'
  >
    <BiAward />
    <span>Lihat Sertifikat</span>
    </a>
</div>

          <div className='text-content-wp24'>
            <h2>Welcome Party Informatika 2024 - Koor Divisi Acara</h2>
            <p>Tanggung jawab saya mencakup:</p>
            <ul>
              <li>Membagi dan mengoordinasikan tugas kepada staf.</li>
              <li>Mengawasi progres kerja tim dan memberikan arahan sesuai kebutuhan.</li>
              <li>Sebagai penghubung utama antara kebutuhan teknis acara dengan divisi lain.</li>
            </ul>
          </div>
        </div>
{/* -------------------------------bagian hutkm----------------------- */}
        <div className='content-flex-hutkm'>
          <div className='image-container-hutkm'>
  <img src={hutkm} alt="Pengalaman saya" className='hutkm-image' />
  <a
    href="https://drive.google.com/file/d/1-X4wIY_rWij1Jt81kRDVRMdogyLI35ng/view?usp=sharing"
    rel='noopener noreferrer'
    className='sertifikat-badge-hutkm'
    title='Lihat Sertifikat'
  >
    <BiAward />
    <span>Lihat Sertifikat</span>
    </a>
</div>

          <div className='text-content-hutkm'>
            <h2>HUT KM XI - Staf Divisi Perkamjin</h2>
            <p>Tanggung jawab saya mencakup:</p>
            <ul>
              <li>Membantu pengadaan, pendistribusian, dan pengelolaan perlengkapan kegiatan.</li>
              <li>Mendukung kelancaran dan ketertiban acara dari sisi keamanan internal.</li>
              <li>Mengurus kebutuhan perizinan kegiatan, baik internal maupun eksternal.</li>
              <li>Menyiapkan kebutuhan teknis di lapangan sesuai arahan koordinator.</li>
            </ul>
          </div>
        </div>
{/* -------------------------------bagian infinitevol4----------------------- */}
        <div className='content-flex-infinitevol4'>
          <div className='image-container-infinitevol4'>
  <img src={infinitevol4} alt="Pengalaman saya" className='infinitevol4-image' />
  <a
    href="https://drive.google.com/file/d/1-X4wIY_rWij1Jt81kRDVRMdogyLI35ng/view?usp=sharing"
    rel='noopener noreferrer'
    className='sertifikat-badge-infinitevol4'
    title='Lihat Sertifikat'
  >
    <BiAward />
    <span>Lihat Sertifikat</span>
    </a>
</div>

          <div className='text-content-infinitevol4'>
            <h2>Welcome Party Informatika 2024 - Koor Divisi Lomba</h2>
            <p>Tanggung jawab saya mencakup:</p>
            <ul>
              <li>Membagi dan mengoordinasikan tugas kepada staf.</li>
              <li>Mengawasi progres kerja tim dan memberikan arahan sesuai kebutuhan Lomba.</li>
              <li>Mengawasi pelaksanaan lomba dan evaluasi pasca kegiatan.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Exprience;