import React from 'react';
import styles from '../styles/loading.module.css';

const Loading: React.FC = () => {
  return (
    <div className={styles.spinner}>
        <svg viewBox="0 0 50 50">
            <circle color="#FFC507" cx="25" cy="25" r="20" fill="none" stroke-width="4"></circle>
        </svg>
    </div>
);
}

export default Loading;