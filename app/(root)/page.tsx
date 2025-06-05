// app/signin/page.tsx

import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Amir Shakibafar"},
      _id: 1,
      description: "im explaining",
      image:
        "https://images.unsplash.com/photo-1742832599361-7aa7decd73b4?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "woman",
      title: "me like",
    },
  ];
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
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Results For "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, idx: number) => <StartupCard key={idx} post={post}/>)
          ) : (
            <p className="no-result">No Startups Found</p>
          )}
        </ul>
      </section>
    </main>
  );
}
