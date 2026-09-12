import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.text}>
          Built by{" "}
          <a href="https://altagether.org" target="_blank" rel="noopener noreferrer">
            Altagether
          </a>{" "}
          in partnership with the Department of Angels federal funding campaign.
        </p>
      </div>
    </footer>
  );
}
