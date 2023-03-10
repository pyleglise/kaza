
import Banner from "../components/Banner";
import Card from "../components/Card";
import lodgingList from "../data/lodging.json";
import background from "../assets/background-home.png";

// Définition de la fonction Home qui retourne le contenu de la page
function Home() {
  

  return (
    <>
      <Banner
        imageURL={background}
        title="Chez vous, partout et ailleurs"
        alt="bannière représentant des rochers et la mer"
      />
      <main>
        <section className="cards">
          {lodgingList.map((lodging) => (
            <Card
              key={lodging.id}
              id={lodging.id}
              title={lodging.title}
              cover={lodging.cover}
              location={lodging.location}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default Home;