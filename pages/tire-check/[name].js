const Page = ({ time, name }) => {
  return `Time: ${time}, Name: ${name}`;
};

export async function getServerSideProps({ params }) {
  const { name } = params;
  const whiteListName = { "20-check-tires": true };
  if (whiteListName.hasOwnProperty(name)) {
    return {
      props: {
        name,
        time: new Date().toString(),
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
}

export default Page;
