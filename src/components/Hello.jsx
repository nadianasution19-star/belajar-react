function Hello({ name, semester }) {
    return (
        <div className="hello-card">
            <span className="eyebrow">KOMPONEN + PROPS</span>
            <h2>Halo, {name  'Mahasiswa'}! ({semester  'Semester 3'})</h2>
            <p>Ini komponen hello yang menerima data nama dari App.</p>
        </div>
    )
}

export default Hello