import '../styles/Exprience.css';
import infinitevol3 from '../assets/infinitevol3.jpg';
import { BiAward } from 'react-icons/bi';

function Exprience() {
  return (
    <section id='exprience'>
      <div className='wrapper'>
        <h3 className='exprience-title'>Pengalaman</h3>

        <div className='content-flex'>
          <div className='image-container'>
  <img src={infinitevol3} alt="Pengalaman saya" className='infinitevol3-image' />
  <a
    href="https://drive.google.com/file/d/1uzo-i8Y_xXQzUSDzAfz5n_02GD2EuQ8A/view?usp=drivesdk"
    target='_blank'
    rel='noopener noreferrer'
    className='sertifikat-badge'
    title='Lihat Sertifikat'
  >
    <BiAward />
    <span>Lihat Sertifikat</span>
    </a>
</div>

          <div className='text-content'>
            <h2>Infinite Vol. 3 - Staf Divisi Lomba</h2>
            <p>Tanggung jawab saya mencakup:</p>
            <ul>
              <li>Menyusun konsep teknis dan alur lomba.</li>
              <li>Berkoordinasi dengan peserta dan juri untuk kelancaran pelaksanaan lomba.</li>
              <li>Membantu dalam penjurian, dokumentasi, dan evaluasi akhir kegiatan.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Exprience;