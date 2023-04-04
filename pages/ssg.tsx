import Link from 'next/link'


export default function SSG({ formattedDate }: { formattedDate: string }) {
  return (
    <>
      <h1>Static page</h1>
      <p>This page is static. It was built on {formattedDate}.</p>

      <p>
        <Link href="/">View Home page.</Link>
      </p>
      
      <p>
        <Link href="/ssr">View a SSR page.</Link>
      </p>
    </>
  );
}

export async function getStaticProps() {
  const buildDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(buildDate);
  console.log(
    `SSG ran on ${formattedDate}. This will be logged in CloudWatch.`
  );
  return { props: { formattedDate } };
}
