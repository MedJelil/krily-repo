import React from 'react';
import styles from '../styles/RadioButtons.module.css';

const RadioButtons = () => {
    return (
        <div className={styles.radioButtonsContainer}>
            <div className={styles.radioButton}>
                <input name="radio-client" id="client" className={styles.radioButtonInput} type="radio" />
                <label htmlFor="client" className={styles.radioButtonLabel}>
                    <span className={styles.radioButtonCustom}></span>
                    Utilisateur Simple
                </label>
            </div>
            <div className={styles.radioButton}>
                <input name="radio-agence" id="agence" className={styles.radioButtonInput} type="radio" />
                <label htmlFor="agence" className={styles.radioButtonLabel}>
                    <span className={styles.radioButtonCustom}></span>
                    Agence
                </label>
            </div>
        </div>
    );
}

export default RadioButtons;
