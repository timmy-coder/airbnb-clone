import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

//https://i.ibb.co/hLMD3Ps/pexels-8570730.jpg
//https://i.ibb.co/rQGFJTs/pexels-athena-6782756.jpg
//https://i.ibb.co/JCS1RzB/pexels-faruk-tokluo-lu-6777376.jpg

export default function Home({ }){
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {/* Banner*/}
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {/* Pull some data from a server - API endpoints */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          <SmallCard img="https://links.papareact.com/kji" Location='London' distance='45-minute drive'/>
          <SmallCard img="https://links.papareact.com/kji" Location='Manchester' distance='4.5-hours drive'/>
          <SmallCard img="https://links.papareact.com/kji" Location='Liverpool' distance='4-hours drive'/>
          <SmallCard img="https://links.papareact.com/kji" Location='York' distance='4.5-hours drive'/>
          <SmallCard img="https://i.ibb.co/hLMD3Ps/pexels-8570730.jpg" Location='Cardiff' distance='45-minute drive'/>
          <SmallCard img="https://links.papareact.com/kji" Location='New Way' distance='6-hours drive'/>
          <SmallCard img="https://links.papareact.com/kji" Location='Move' distance='5-minute drive'/>
          
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live anywhere</h2>

          {/* {cardsData.map(item => (
            <h1>{item.title}</h1>
          ))} */}

          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
          <MediumCard title="London" img='https://i.ibb.co/hLMD3Ps/pexels-8570730.jpg'/>
          <MediumCard title="Costa Rica" img='https://i.ibb.co/rQGFJTs/pexels-athena-6782756.jpg'/>
          <MediumCard title="Madrid" img='https://i.ibb.co/JCS1RzB/pexels-faruk-tokluo-lu-6777376.jpg'/>
          <MediumCard title="Barcelona" img='https://i.ibb.co/hLMD3Ps/pexels-8570730.jpg'/>
          </div>
        </section>

        <LargeCard img='https://links.papareact.com/4cj'
        title='The Greatest Outdoors'
        description='Wishlists curated by Airbnb'
        buttonText='Get Inspired'
        />
      </main>

      <Footer/>
    </div>
  )
}

// Static Rendering
// export async function getStaticProps(){
//   const exploreData = await fetch("https://links.papareact.com/pyp").then((res) => res.json());

//   const cardsData = await fetch('https://links.papareact.com/zp1').then((res) => res.json())
//   return {
//     props: {
//       exploreData,
//       cardsData
//     }
//  }
// }


