import blossomFlower from '../../assets/blossom-flower.svg'
import styles from './SignUp.module.css'

function SignUp() {
  return (
    <main className={styles.page} aria-label="Sign up">
      <section className={styles.leftSection} aria-label="Sign up form">
        <h1 className={styles.title}>Get Started Now</h1>
      </section>
      <section className={styles.rightSection} aria-label="Blossom image">
        <img
          className={styles.image}
          src={blossomFlower}
          alt=""
          width="828"
          height="936"
        />
      </section>
    </main>
  )
}

export default SignUp
