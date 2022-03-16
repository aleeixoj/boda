import Head from 'next/head';

interface IPageProps {
  title: string;
  description: string;
  children: any;
}

const Page = ({ title, description, children }: IPageProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      {children}
    </>
  );
};

export default Page;
