import React from 'react';
import styles from './IndiceTable.module.css';

const data = [
  { tema: '🅰️ Angular', link: '../desarrollo-web/angular' },
  { tema: '⚛️ React', link: '../desarrollo-web/react' },
  { tema: '🟩 NodeJS', link: '../desarrollo-web/nodejs' },
  { tema: '✨ JavaScript', link: '../desarrollo-web/javascript' },
  { tema: '🌐 HTML', link: '../desarrollo-web/html' },
  { tema: '🎨 CSS', link: '../desarrollo-web/css' },
  { tema: '💅 SCSS', link: '../desarrollo-web/scss' },
  { tema: '♿ Accesibilidad', link: '../accesibilidad/Accesibilidad' },
  { tema: '🔄 CICD', link: '../cicd' },
  { tema: '🗂️ Versionado', link: '../versionado' },
];

export default function IndiceTable() {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.indiceTable}>
        <thead>
          <tr>
            <th>📚 Tema</th>
            <th>📄 Página</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.tema}</td>
              <td><a href={row.link}>Ver</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
