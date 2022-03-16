import { NextSeo } from 'next-seo';
import Head from 'next/head';

interface IPageProps {
  title: string;
  description: string;
  children: any;
}

const Page = ({ title, description, children }: IPageProps) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url: 'https://boda.vercel.app/',
          title: 'Aleixo & Bruna te convidam para festa de casamento',
          images: [
            {
              url: '/favicon.jpg',
              width: 800,
              height: 600,
              alt: 'Aleixo e Bruna',
            },
          ],
        }}
      />

      {children}
    </>
  );
};

export default Page;
