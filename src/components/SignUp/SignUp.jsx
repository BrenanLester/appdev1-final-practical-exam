import blossomFlower from '../../assets/blossom-flower.svg'
import googleLogo from '../../assets/icons-google-logo.svg'
import appleLogo from '../../assets/icons-apple-logo.svg'
import { Input } from '@/components/ui/input'
import styles from './SignUp.module.css'

function SignUp() {
  return (
    <main className={styles.page} aria-label="Sign up">
      <section className={styles.leftSection} aria-label="Sign up form">
        <h1 className={styles.title}>Get Started Now</h1>
        <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
          <div className={styles.fields}>
            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                autoComplete="name"
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email address</label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="password">Password</label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Name"
                autoComplete="new-password"
                required
              />
            </div>
          </div>
          <label className={styles.agreement} htmlFor="terms">
            <input id="terms" name="terms" type="checkbox" required />
            <span>
              I agree to the <span className={styles.terms}>terms &amp; policy</span>
            </span>
          </label>
          <button className={styles.signupButton} type="submit">
            Signup
          </button>
        </form>
        <div className={styles.bottomSection}>
          <div className={styles.divider}>
            <span>Or</span>
          </div>
          <div className={styles.socialButtons}>
            <button className={styles.socialButton} type="button">
              <img src={googleLogo} alt="" width="24" height="24" />
              <span>Sign in with Google</span>
            </button>
            <button className={styles.socialButton} type="button">
              <img src={appleLogo} alt="" width="24" height="24" />
              <span>Sign in with Apple</span>
            </button>
          </div>
          <p className={styles.accountPrompt}>
            Have an account? <span className={styles.signIn}>Sign In</span>
          </p>
        </div>
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
