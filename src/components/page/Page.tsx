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
              url: 'https://lh3.googleusercontent.com/fIfVad3LnDtGcE9bitYZTf_O3nQwHE2opQ0QnFE5kyqmmGrRAHtZ5wsLGSprBml_IUCT0BWvMmJH2XY-cha6If4XnKK032aALnwu_1NOYUn0QFPWRLBh4aCjSuStbIY2IT19TRG5c7_hOicpiLUP7VThzA2Px2huapjIKuJvS4Q1YcXJi6iFDPyRsy7A0kXdrfl9qeDDcCXXTte6iHRKPFY5ZyDsEUZBARsL0ACXFPjOQFY-iRmXy55rnakoFDpqwo0wSIvJHdI1n1vtPskfQd7wFqcy0HnBCLVpmJIgMSaWeIYg1qlHInrfiKscEsCX0JVn1beBB0INmjl_OR1lQ7q9-mppcFJSWtyzPE52BAoXz9e4dQszJVTXtdgfFk9-N-tyKHyg3H4TJl8artitLnpKD_aeFWCa10u5hdpfAzILzpywuqbm8eI13hu5pyYUkEIF-b4UC1m2mf17e_oG5bt87z9CHyxQwSdsggdAdNv6LG_zTnYyBJiwqO9udHgHqNE3-g2XXiQy95D1Qq8kWYtjwgNnFkMllcxU_OR5Q0NBI0pbaFDjsXtMOo6sNawl6H5Pkk7co_kaA69QG6wXMdo2L7UgP0tuBe0uIoIn8URjtu2Iwx8NmGACDS3ifE6nAyDEhNAB9qoRVLjLU5kYSfrd4122keMAyOZrwkUGjCcYfCr-P3GRKcrzQjD3rsuKXtKT_tvGz5KdnRXMfFjbZ9W2=w733-h979-no?authuser=0',
              width: 240,
              height: 240,
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
