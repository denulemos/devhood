import React from 'react';
import styles from './IndiceTable.module.css';

const data = [
  { tema: '🅰️', nombre: 'Angular', link: '../desarrollo-web/angular' },
  { tema: '⚛️', nombre: 'React', link: '../desarrollo-web/react' },
  { tema: '🟩', nombre: 'NodeJS', link: '../desarrollo-web/nodejs' },
  { tema: '✨', nombre: 'JavaScript', link: '../desarrollo-web/javascript' },
  { tema: '🌐', nombre: 'HTML', link: '../desarrollo-web/html' },
  { tema: '🎨', nombre: 'CSS', link: '../desarrollo-web/css' },
  { tema: '💅', nombre: 'SCSS', link: '../desarrollo-web/scss' },
  { tema: '♿', nombre: 'Accesibilidad', link: '../accesibilidad/Accesibilidad' },
  { tema: '🔄', nombre: 'CICD', link: '../cicd' },
  { tema: '🗂️', nombre: 'Versionado', link: '../versionado' },
];

export default function IndiceTable() {
  return (
    <div className={styles.gridWrapper}>
      <div className={styles.grid}>
        {data.map((row, i) => (
          <a className={styles.card} href={row.link} key={i}>
            <span className={styles.icon}>{row.tema}</span>
            <span className={styles.name}>{row.nombre}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
