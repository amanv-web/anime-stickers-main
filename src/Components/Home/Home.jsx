import ItemCard from "../Items/ItemCard";
function Home() {
  return (
    <>
      <div className="bg-primary-quaternary dark:bg-gray-700">
        <div>
          <h1
            className="flex text-primary-secondary justify-center font-bold text-3xl pt-12 dark:text-gray-300"
          >
            Get Anime stickers  <span className="pl-2 text-primary dark:text-gray-100">  NOW!   </span>
          </h1>
          <p className="flex justify-center text-center m-2 text-primary p-4 dark:text-gray-300" >
          Anime dreams, now at your fingertips! Stick, share, and let the fandom eclipse!"
          </p>
        </div>
        <ItemCard />
      </div>
    </>
  );
}

export default Home;
