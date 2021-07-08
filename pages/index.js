import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout, { siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import '../styles/sass.module.scss'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/dist/client/link'
import Date from '../components/date'

// 静态生成 Static Generation
export async function getStaticProps(){
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }){
  const router = useRouter();
  return(
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://www.nextjs.cn/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={{
                pathname: `/post/${id}`,
                query: {
                  id: id
                }
              }}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date}></Date>
              </small>
            </li>
          ))}
          <li className={utilStyles.listItem}>
            <a onClick={() => router.push('/content')}>Go content</a>
          </li>
        </ul>
      </section>
    </Layout>
  )
}