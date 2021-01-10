import Head from "next/head";
import styles from "@/styles/UserInfoSearch.module.css";
import { UserInfoSearch as UserInfoSearchModule } from "@/components/modules/UserInfoSearch";

const UserInfoSearch: React.FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>User Info Search</title>
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>User Info Search</h1>
        </main>

        <UserInfoSearchModule />

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </>
  );
};

export default UserInfoSearch;
