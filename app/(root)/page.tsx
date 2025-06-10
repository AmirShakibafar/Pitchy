// app/signin/page.tsx

import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = {search: query || null };
  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

  return (
    <>
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
        <section className="section_container">
          <p className="text-30-semibold">
            {query ? `Search Results For "${query}"` : "All Startups"}
          </p>

          <ul className="mt-7 card_grid">
            {posts?.length > 0 ? (
              posts.map((post: StartupTypeCard, idx: number) => (
                <StartupCard key={idx} post={post} />
              ))
            ) : (
              <p className="no-result">No Startups Found</p>
            )}
          </ul>
        </section>
      </main>
      <SanityLive />
    </>
  );
}
