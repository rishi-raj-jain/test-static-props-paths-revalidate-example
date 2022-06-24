const Page = ({ time, name }) => {
  return `Time: ${time}, Name: ${name}`;
};

export async function getStaticProps({ params }) {
  const { name } = params;
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
    paths: [{ params: { name: "LOL" } }],
    fallback: false,
  };
}

export default Page;
