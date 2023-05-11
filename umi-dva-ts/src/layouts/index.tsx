import { Link, Outlet, useNavigate } from 'umi';
import styles from './index.less';

export default function Layout() {
  const navigate = useNavigate()
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <div onClick={() => navigate('/docs')}>Docs</div>
        </li>
        <li>
          <a href="https://github.com/umijs/umi">UMI Github</a>
        </li>
        <li>
          <a href="https://github.com/Jachin-Luo">JACHIN Github</a>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
