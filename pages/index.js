import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout, {fullName, sideTitle}  from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostData } from '../lib/posts';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout Home>
      <Head>
        <title>{sideTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hola soy <bdi className={utilStyles.headingName}>Alexis Montalvo Callaú</bdi>, un estudiante de Ingeniería informatica y Economía en la Universidad Politécnica de Valencia</p>
        <p>
          (Este es un ejemplo de pagina web, sigueme en mi {' '} <a href='https://github.com/achechi15'>github</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/post/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

/*
this is for Static generation
  export async function getStaticProps() {
    // Get external data from db, API, etc.
    const data = ...
    return {
      props: ...
    }
  }
*/
/*
This is for generation from Server-Side
  export async funtion getServerSideProps(contetx) {
    return {
      props: {
        ...
      },
    };
  }
*/