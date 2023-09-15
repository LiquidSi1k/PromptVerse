import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Uncover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          {" "}
          AI-Generated Prompts
        </span>
      </h1>
      <p className="desc text-center">
        Designed for the modern world, PromptVerse serves as an open-source AI
        prompt utility, allowing users to explore, craft, and disseminate
        imaginative prompts.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
