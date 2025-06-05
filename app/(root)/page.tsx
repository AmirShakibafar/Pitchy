// app/signin/page.tsx

import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  return (
    <main>
      <section className="pink-container">
        <h1 className="heading">
          Present Your Ideas <br /> Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit your idea, vote on pitches and get noticed in virtual
          competitions
        </p>
        <SearchForm query={query} />
      </section>
    </main>
  );
}
