import React from 'react';
import styles from './IndiceTable.module.css';

const data = [
  { tema: '🅰️ Angular', link: '../desarrollo-web/angular.md' },
  { tema: '⚛️ React', link: '../desarrollo-web/react.md' },
  { tema: '🟩 NodeJS', link: '../desarrollo-web/nodejs.md' },
  { tema: '✨ JavaScript', link: '../desarrollo-web/javascript.md' },
  { tema: '🌐 HTML', link: '../desarrollo-web/html.md' },
  { tema: '🎨 CSS', link: '../desarrollo-web/css.md' },
  { tema: '💅 SCSS', link: '../desarrollo-web/scss.md' },
  { tema: '♿ Accesibilidad', link: '../accesibilidad/Accesibilidad.md' },
  { tema: '🔄 CICD', link: '../cicd.md' },
  { tema: '🗂️ Versionado', link: '../versionado.md' },
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
