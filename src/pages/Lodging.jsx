import React from 'react'
import { useParams } from 'react-router-dom'
import Tags from '../components/Tags'
import Rate from '../components/Rate'
import Carrousel from '../components/Carrousel'
import Collapse from '../components/Collapse'
import Error from '../pages/Error'
import '../utils/style/_lodging.scss'
import '../utils/style/_loader.scss'
// import lodges from '../data/lodging.json'
import { useGet } from '../components/Hook'

/*
 ** Version 2 : we use a hook to get data from the JSON file
 ** The hook is used as an API
 */
console.log('Version 2 : we use a hook to get data from the JSON file')
const Lodging = () => {
  const lodges = useGet()
  const { id } = useParams()

  if (!lodges.error) {
    if (lodges.isLoading) {
      return (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )
    } else {
      const lodging = lodges.data.find((lodge) => lodge.id === id)

      if (!lodging) {
        return <Error />
      }

      return (
        <>
          <Carrousel lodge={lodging} />
          <div className="lodge_container">
            <div className="info_container">
              <Tags lodge={lodging} />
            </div>
            <div className="host_rate">
              <div className="host">
                <p className="host_name">{lodging.host.name}</p>
                <img
                  src={lodging.host.picture}
                  alt={lodging.host.name}
                  className="host_picture"
                />
              </div>
              <Rate lodge={lodging} />
            </div>
          </div>
          <div className="collapses">
            <Collapse title="Description">
              <p>{lodging.description}</p>
            </Collapse>
            <Collapse title="Equipements">
              <ul>
                {lodging.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </Collapse>
          </div>
        </>
      )
    }
  } else {
    return (
      <section className="error">
        <p>Une erreur est survenue lors de la récupération des données !!</p>
      </section>
    )
  }
}
export default Lodging

/*
 ** Version 1 : we look directly into the JSON File
 ** No Hook used
 */
// console.log('Version 1 : we look directly into the JSON File')
// const Lodging = () => {
//   const { id } = useParams()
//   // console.log(lodges)

//   const lodging = lodges.find((lodge) => lodge.id === id)
//   if (!lodging) {
//     return <Error />
//   }

//   return (
//     <>
//       <Carrousel lodge={lodging} />
//       <div className="lodge_container">
//         <div className="info_container">
//           <Tags lodge={lodging} />
//         </div>
//         <div className="host_rate">
//           <div className="host">
//             <p className="host_name">{lodging.host.name}</p>
//             <img
//               src={lodging.host.picture}
//               alt={lodging.host.name}
//               className="host_picture"
//             />
//           </div>
//           <Rate lodge={lodging} />
//         </div>
//       </div>
//       <div className="collapses">
//         <Collapse title="Description">
//           <p>{lodging.description}</p>
//         </Collapse>
//         <Collapse title="Equipements">
//           <ul>
//             {lodging.equipments.map((equipment, index) => (
//               <li key={index}>{equipment}</li>
//             ))}
//           </ul>
//         </Collapse>
//       </div>
//     </>
//   )
// }
// export default Lodging
