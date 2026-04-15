import React from 'react';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>⚡</span> SkyAlert
        </div>
        <div className={styles.navLinks}>
          <a href="#radar" className={styles.navLink}>Live Radar</a>
          <a href="#forecast" className={styles.navLink}>Forecasts</a>
          <a href="#network" className={styles.navLink}>Secure Network</a>
        </div>
        <a href="https://discord.gg/AtwfXDQquU" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>Join Discord</a>
      </nav>

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Advanced <span className={styles.highlight}>Weather Intelligence</span>
          </h1>
          <p className={styles.subtitle}>
            The official hub for the SkyAlert Network. Real-time meteorological data, professional forecasts, and immediate emergency telemetry.
          </p>
          <div className={styles.heroActions}>
            <a href="#dashboard" className={styles.btnPrimaryLg}>Launch Dashboard</a>
            <a href="#about" className={styles.btnSecondaryLg}>Network Protocol</a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={`${styles.radarSweep} glass-panel`}>
             <div className={styles.radarRing}></div>
             <div className={styles.radarPointer}></div>
          </div>
        </div>
      </div>

      <section className={styles.features} id="network">
        <div className={`${styles.featureCard} glass-panel`}>
          <div className={styles.featureIcon}>📡</div>
          <h3>NWS Telemetry</h3>
          <p>Direct ingestion of National Weather Service broadcasts via our KHB92/WXB26 architecture.</p>
        </div>
        <div className={`${styles.featureCard} glass-panel`}>
          <div className={styles.featureIcon}>⚠️</div>
          <h3>Emergency Escalation</h3>
          <p>Automated Special Coverage Mode (SCM) protocols triggered instantly during major severe threats.</p>
        </div>
        <div className={`${styles.featureCard} glass-panel`}>
          <div className={styles.featureIcon}>🛡️</div>
          <h3>Private Access</h3>
          <p>Secure onboarding airlocks and private intelligence tickets managed directly through Discord.</p>
        </div>
      </section>
      
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} SkyAlert Network. All telemetry secure.</p>
      </footer>
    </main>
  );
}
