import blossomFlower from '../../assets/blossom-flower.svg'
import googleLogo from '../../assets/icons-google-logo.svg'
import appleLogo from '../../assets/icons-apple-logo.svg'
import styles from './Login.module.css'

function Login() {
  return (
    <main className={styles.page} aria-label="Login">
      <section className={styles.leftSection} aria-label="Login form">
        <h1 className={styles.title}>Welcome back!</h1>
        <p className={styles.subtitle}>
          Enter your Credentials to access your account
        </p>
        <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
          <div className={styles.fields}>
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
              <div className={styles.passwordLabel}>
                <label htmlFor="password">Password</label>
                <a className={styles.forgotPassword} href="#forgot-password">
                  forgot password
                </a>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Name"
                autoComplete="current-password"
                required
              />
            </div>
          </div>
          <label className={styles.rememberMe} htmlFor="remember">
            <input id="remember" name="remember" type="checkbox" />
            <span>Remember for 30 days</span>
          </label>
          <button className={styles.loginButton} type="submit">
            Login
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
            Don’t have an account? <span className={styles.signIn}>Sign Up</span>
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

export default Login
import { Input } from '@/components/ui/input'
