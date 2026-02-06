import React, { useState } from 'react';

function App() {
  const [jenis, setJenis] = useState('Gugatan');
  const [isMinutasi, setIsMinutasi] = useState(false);

  // Gaya CSS Langsung (Internal) agar 100% Berhasil di Vercel
  const style = {
    container: { padding: '20px', fontFamily: 'Arial', maxWidth: '800px', margin: 'auto' },
    card: { border: '1px solid #ddd', padding: '20px', borderRadius: '10px', marginBottom: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' },
    formGroup: { marginBottom: '15px' },
    table: { width: '100%', borderCollapse: 'collapse' as const, marginTop: '20px' },
    th: { border: '1px solid #ddd', padding: '10px', background: '#f4f4f4' },
    td: { border: '1px solid #ddd', padding: '10px' },
    btnSudah: { background: '#28a745', color: 'white', border: 'none', padding: '8px', borderRadius: '4px', cursor: 'pointer' },
    btnBelum: { background: '#dc3545', color: 'white', border: 'none', padding: '8px', borderRadius: '4px', cursor: 'pointer' },
    location: { background: '#f9f9f9', padding: '15px', borderRadius: '8px', marginTop: '20px', border: '1px dashed #ccc' }
  };

  return (
    <div style={style.container}>
      <h1 style={{ textAlign: 'center' }}>E-Minutasi Digital</h1>
      
      <div style={style.card}>
        <button style={{ background: '#007bff', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', marginBottom: '15px' }}>Scan QR Code</button>
        <div style={style.formGroup}>
          <label>No. Perkara: </label>
          <input type="text" placeholder="Masukkan nomor..." style={{ width: '100%', padding: '8px' }} />
        </div>
        <div style={style.formGroup}>
          <label>Jenis Perkara: </label>
          <select value={jenis} onChange={(e) => setJenis(e.target.value)} style={{ width: '100%', padding: '8px' }}>
            <option value="Gugatan">Gugatan</option>
            <option value="Permohonan">Permohonan</option>
          </select>
        </div>
      </div>

      <h2>Detail {jenis}</h2>
      <table style={style.table}>
        <thead>
          <tr>
            <th style={style.th}>No. Perkara</th>
            {jenis === 'Gugatan' && <th style={style.th}>Para Pihak</th>}
            <th style={style.th}>Tgl Putus</th>
            <th style={style.th}>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={style.td}>123/Pdt.{jenis[0]}/2026</td>
            {jenis === 'Gugatan' && <td style={style.td}>Pihak A vs Pihak B</td>}
            <td style={style.td}>06/02/2026</td>
            <td style={style.td}>
              <button onClick={() => setIsMinutasi(!isMinutasi)} style={isMinutasi ? style.btnSudah : style.btnBelum}>
                {isMinutasi ? "Sudah Minutasi" : "Belum Minutasi"}
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {isMinutasi && (
        <div style={style.location}>
          <h3>📍 Lokasi Arsip Fisik</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <input placeholder="No. Ruang" style={{ padding: '8px' }} />
            <input placeholder="No. Rak" style={{ padding: '8px' }} />
            <input placeholder="No. Laci" style={{ padding: '8px' }} />
            <input placeholder="No. Box" style={{ padding: '8px' }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
