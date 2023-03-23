import Banner from '../components/Banner'
import Card from '../components/Card'
import { useGet } from '../components/Hook'
import background from '../assets/background-home.png'
import '../utils/style/_error.scss'
import '../utils/style/_loader.scss'

// Définition de la fonction Home qui retourne le contenu de la page
const Home = () => {
  const lodges = useGet()
  return (
    <>
      <Banner
        imageURL={background}
        title="Chez vous, partout et ailleurs"
        alt="Bannière"
      />
      <main>
        {!lodges.error ? (
          lodges.isLoading ? (
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            <section className="cards">
              {lodges.data.map((lodging) => (
                <Card
                  key={lodging.id}
                  id={lodging.id}
                  title={lodging.title}
                  cover={lodging.cover}
                  // location={lodging.location}
                />
              ))}
            </section>
          )
        ) : (
          <section className="error">
            <p>
              Une erreur est survenue lors de la récupération des données !!
            </p>
          </section>
        )}
      </main>
    </>
  )

  // if (!lodges.error){
  //   if (lodges.isLoading){
  //     return("Patientez, chargement en cours...")
  //   }else{
  //     const lodgingList=lodges.data
  //     return (
  //       <>
  //         <Banner
  //           imageURL={background}
  //           title="Chez vous, partout et ailleurs"
  //           alt="Bannière"
  //         />
  //         <main>
  //           <section className="cards">
  //             {lodgingList.map((lodging) => (
  //               <Card
  //                 key={lodging.id}
  //                 id={lodging.id}
  //                 title={lodging.title}
  //                 cover={lodging.cover}
  //                 // location={lodging.location}
  //               />
  //             ))}
  //           </section>
  //         </main>
  //       </>
  //     )
  //   }
  // }else{

  // }
}

export default Home
