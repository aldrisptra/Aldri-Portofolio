import '../styles/Exprience.css'
import infinitevol3 from '../assets/infinitevol3.jpg';

function Exprience() {
  return (
    <section id='exprience'>
        <div className='wrapper'>
          <h3 className='exprience-title'>Pengalaman</h3>

          <div className='content-flex'>
            <img src= {infinitevol3} alt="Pengalaman saya" className='infinitevol3-image' />

            <div className='text-content'>
              <h2>Infinite Vol. 3 - Staf Divisi Lomba</h2>
              <p>
                Tanggung jawab saya mencakup:
                <ul>
                  <li>Menyusun konsep teknis dan alur lomba.</li>
                  <li>Berkoordinasi dengan peserta dan juri untuk kelancaran pelaksanaan lomba.</li>
                  <li>Membantu dalam penjurian, dokumentasi, dan evaluasi akhir kegiatan.</li>
                </ul>
                Melalui pengalaman ini, saya belajar bekerja secara tim, mengelola waktu dengan baik, serta meningkatkan kemampuan komunikasi dan problem solving di bawah tekanan acara.
              </p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Exprience