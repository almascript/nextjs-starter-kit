import { StyleSheet, css } from 'aphrodite';
import Color from 'color';
import Link from '../Link';
import { brandColor, maxContentWidth } from '../theme';

export default () => (
  <div className={css(styles.root)}>
    <div className={css(styles.container)}>
      <Link className={css(styles.brand)} to="/">
        <span className={css(styles.brandTxt)}>Your Company</span>
      </Link>
      <div className={css(styles.banner)}>
        <h1 className={css(styles.bannerTitle)}>React</h1>
        <p className={css(styles.bannerDesc)}>Complex web apps made easy</p>
      </div>
    </div>
  </div>
);

const styles = StyleSheet.create({
  root: {
    background: '#373277',
    color: '#fff',
  },
  container: {
    margin: '0 auto',
    padding: '20px 0',
    maxWidth: maxContentWidth,
  },
  brand: {
    color: Color(brandColor).lighten(0.1).hex(),
    textDecoration: 'none',
    fontSize: '1.75em', // ~28px
  },
  brandTxt: {
    marginLeft: '10px',
  },
  nav: {
    float: 'right',
    marginTop: '6px',
  },
  banner: {
    textAlign: 'center',
  },
  bannerTitle: {
    margin: 0,
    padding: '10px',
    fontWeight: 'normal',
    fontSize: '4em',
    lineHeight: '1em',
  },
  bannerDesc: {
    padding: 0,
    color: Color('rgba(255, 255, 255, 0.5)').hex(),
    fontSize: '1.25em',
    margin: 0,
  },
});
