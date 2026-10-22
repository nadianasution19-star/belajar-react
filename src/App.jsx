import { useState } from 'react'
import Hello from './components/Hello.jsx'
import Counter from './components/Counter.jsx'

function App() {
  const [name, setName] = useState('Budi')

  return (
    <main className="app-shell">
      <header className="app-header">
        <div className="logo">⚛️</div>
        <div>
          <span className="eyebrow">PRAKTIKUM PERTAMA</span>
          <h1>My First React App</h1>
          <p>Belajar komponen, props, state, dan event.</p>
        </div>
      </header>

      <section className="input-card">
        <label htmlFor="student-name">Masukkan nama:</label>
        <input
          id="student-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Tulis nama mahasiswa"
        />
        <small>Mengubah state di App akan mengirim props baru ke Hello.</small>
      </section>
      <div className="app-grid">
        <Hello name={name} semester="Semester 3" />
        <Counter step={1} />
      </div>

      <footer>Latihan React + Vite • Sub-CPMK 8</footer>
    </main>
  )
}

export default App