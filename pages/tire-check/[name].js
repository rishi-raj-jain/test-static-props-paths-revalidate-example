const Page = ({ time, name }) => {
  return `Time: ${time}, Name: ${name}`;
};

export async function getStaticProps({ params }) {
  const { name } = params;
  if (name !== 'LOL') {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      name,
      time: new Date().toString(),
    },
    revalidate: 2,
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { name: 'LOL' } }],
    fallback: 'blocking',
  };
}

export default Page;
