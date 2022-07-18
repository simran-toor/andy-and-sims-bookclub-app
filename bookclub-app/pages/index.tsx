import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'; 
import { Document, Page, pdfjs } from 'react-pdf';
import alice from '/assets/alice.pdf'

const url = "https://cors-anywhere.herokuapp.com/https://ia600502.us.archive.org/22/items/alicesadventur00carr/alicesadventur00carr.pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

type onDocumentLoadSuccessProps= {
  numPages: number
}

const Home: NextPage = () => {
  const [numPages, setNumPages] = useState<Number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: onDocumentLoadSuccessProps) {
    setNumPages(numPages);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Bookclub App</title>
        <meta name="description" content="Andy and Sim's Bookclub App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Bookclub
        </h1>

        <div>
          <Document file={alice} onLoadSuccess={onDocumentLoadSuccess} onLoadError={console.error}>
            <Page pageNumber={pageNumber} />
          </Document>
        </div>

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home
