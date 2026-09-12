import Image from "next/image";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.decorLeft} aria-hidden="true" />
      <div className={styles.decorRight} aria-hidden="true" />
      <div className={styles.inner}>
        <Image
          src="/logo-white.png"
          alt="Altagether"
          width={460}
          height={128}
          className={styles.logo}
          priority
        />
        <p className={styles.eyebrow}>Federal disaster recovery</p>
        <h1 className={styles.title}>Take action for federal disaster recovery</h1>
        <p className={styles.intro}>
          Los Angeles fire survivors are still waiting for federal recovery
          funding. Contacting members of Congress can help move relief forward.
          Enter your address below to find who represents you, then call, email,
          or post using the suggested scripts.
        </p>
      </div>
    </header>
  );
}
