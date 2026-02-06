import React, { useState } from 'react';
import './App.css';

function App() {
  const [jenis, setJenis] = useState('Gugatan');
  const [isMinutasi, setIsMinutasi] = useState(false);

  return (
    <div className="container">
      <h1>E-Minutasi Perkara</h1>
      
      {/* BAGIAN ATAS: INPUT UTAMA */}
      <div className="card">
        <button className="qr-button">Scan QR Code</button>
        <div className="form-group">
          <label>No. Perkara :</label>
          <input type="text" placeholder="Masukkan nomor..." />
        </div>
        <div className="form-group">
          <label>Jenis Perkara :</label>
          <select value={jenis} onChange={(e) => setJenis(e.target.value)}>
            <option value="Gugatan">Gugatan</option>
            <option value="Permohonan">Permohonan</option>
          </select>
        </div>
        <div className="form-group">
          <label>Tahun Perkara :</label>
          <input type="number" placeholder="2026" />
        </div>
      </div>

      <hr />

      {/* BAGIAN TENGAH: DETAIL BERDASARKAN JENIS */}
      <h2>Detail Data {jenis}</h2>
      <div className="table-responsive">
        <table className="info-table">
          <thead>
            <tr>
              <th>No. Perkara</th>
              <th>Klasifikasi</th>
              {jenis === 'Gugatan' && <th>Para Pihak</th>}
              <th>Tgl. Putus</th>
              {jenis === 'Gugatan' && <th>Tgl. BHT</th>}
              <th>Status Minutasi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>123/Pdt.{jenis === 'Gugatan' ? 'G' : 'P'}/2026</td>
              <td>Contoh Klasifikasi</td>
              {jenis === 'Gugatan' && <td>Pihak A vs Pihak B</td>}
              <td>01/02/2026</td>
              {jenis === 'Gugatan' && <td>15/02/2026</td>}
              <td>
                <button 
                  onClick={() => setIsMinutasi(!isMinutasi)}
                  className={isMinutasi ? "btn-sudah" : "btn-belum"}
                >
                  {isMinutasi ? "Sudah Minutasi" : "Belum Minutasi"}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* BAGIAN BAWAH: LOKASI ARSIP (Hanya muncul jika "Sudah Minutasi") */}
      {isMinutasi && (
        <div className="location-card animated-fade-in">
          <h3>📍 Lokasi Arsip Fisik</h3>
          <div className="grid-location">
            <div><label>No. Ruang</label><input type="text" /></div>
            <div><label>No. Lemari/Rak</label><input type="text" /></div>
            <div><label>No. Tingkat/Laci</label><input type="text" /></div>
            <div><label>No. Box</label><input type="text" /></div>
          </div>
          <button className="pdf-button">📄 Scan / Lihat PDF</button>
        </div>
      )}
    </div>
  );
}

export default App;
