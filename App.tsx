import React, { useState } from 'react';

function App() {
  const [jenis, setJenis] = useState('Gugatan');
  const [isMinutasi, setIsMinutasi] = useState(false);

  const style = {
    container: { padding: '20px', fontFamily: 'Arial', maxWidth: '800px', margin: 'auto' },
    card: { border: '1px solid #ddd', padding: '20px', borderRadius: '10px', marginBottom: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' },
    btnSudah: { background: '#28a745', color: 'white', border: 'none', padding: '8px', borderRadius: '4px', cursor: 'pointer' },
    btnBelum: { background: '#dc3545', color: 'white', border: 'none', padding: '8px', borderRadius: '4px', cursor: 'pointer' },
    location: { background: '#f9f9f9', padding: '15px', borderRadius: '8px', marginTop: '20px', border: '1px dashed #ccc' }
  };

  return (
    <div style={style.container}>
      <h1 style={{ textAlign: 'center' }}>E-Minutasi Digital</h1>
      <div style={style.card}>
        <div style={{ marginBottom: '15px' }}>
          <label>Jenis Perkara: </label>
          <select value={jenis} onChange={(e) => setJenis(e.target.value)} style={{ width: '100%', padding: '8px' }}>
            <option value="Gugatan">Gugatan</option>
            <option value="Permohonan">Permohonan</option>
          </select>
        </div>
      </div>

      <h2>Detail {jenis}</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f4f4f4' }}>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>No. Perkara</th>
            {jenis === 'Gugatan' && <th style={{ border: '1px solid #ddd', padding: '10px' }}>Para Pihak</th>}
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>123/Pdt.{jenis[0]}/2026</td>
            {jenis === 'Gugatan' && <td style={{ border: '1px solid #ddd', padding: '10px' }}>Pihak A vs Pihak B</td>}
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>
              <button onClick={() => setIsMinutasi(!isMinutasi)} style={isMinutasi ? style.btnSudah : style.btnBelum}>
                {isMinutasi ? "Sudah Minutasi" : "Belum Minutasi"}
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {isMinutasi && (
        <div style={style.location}>
          <h3>📍 Lokasi Arsip Fisik (Sesuai Sketsa)</h3>
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
