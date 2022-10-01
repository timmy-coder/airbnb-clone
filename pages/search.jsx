import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router';
import {format} from 'date-fns';
import InfoCard from '../components/InfoCard';

//https://i.ibb.co/7SdtKhH/pexels-jean-van-der-meulen-1454806.jpg
//https://i.ibb.co/0CH9q4K/pexels-m-w-studios-90317.jpg
//https://i.ibb.co/NVHfjgY/pexels-pixabay-262048.jpg
//https://i.ibb.co/h7KNYLW/pexels-pixabay-271743.jpg
//https://i.ibb.co/q1dM8tt/pexels-terry-magallanes-2631746.jpg

function Search() {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuest } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMM yy")
  const formattedendDate = format(new Date(endDate), "dd MMM yy");
  const range = `${formattedStartDate} - ${formattedendDate}`
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuest}`}/>
      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
            <p className='text-xs'>300+ Stays - {range} - for number {noOfGuest} guests</p>
            <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

            <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                <p className='button'>Cancelation Flexibility</p>
                <p className='button'>Type of place</p>
                <p className='button'>Price</p>
                <p className='button'>Rooms and Beds</p>
                <p className='button'>More filters</p>
            </div>

            <div className='flex flex-col'>
            <InfoCard img='https://i.ibb.co/7SdtKhH/pexels-jean-van-der-meulen-1454806.jpg' 
            location='Private room in center of London' 
            title="Stay at the special Edwadison house"
            description="1 guest . 1 bedroom . 1 bed . 1.5 shared room . Wifi. Kichen . Free parking"
            star="4.73"
            price='$125 / night'
            total='$245 / night'
            />

            <InfoCard img='https://i.ibb.co/0CH9q4K/pexels-m-w-studios-90317.jpg' 
            location='One bedroom near Stanford' 
            title="Stay at the special Brain house"
            description="1 guest . 2 bedroom . 1 bed . 1 shared room . Wifi. Kichen . hottube"
            star="4"
            price='$105 / night'
            total='$205 / night'
            />

            <InfoCard img='https://i.ibb.co/NVHfjgY/pexels-pixabay-262048.jpg' 
            location='Private room in center of London' 
            title="Stay at the special Edwaedison house"
            description="1 guest . 1 bedroom . 1 bed . 1 shared room . Wifi. Kitchen . Free parking"
            star="3.73"
            price='$75 / night'
            total='$185 / night'
            />

            <InfoCard img='https://i.ibb.co/h7KNYLW/pexels-pixabay-271743.jpg' 
            location='Private room in center of London' 
            title="Stay at the special Edwaedison house"
            description="1 guest . 1 bedroom . 1 bed . 1 shared room . Wifi. Kitchen . Free parking"
            star="3.25"
            price='$200 / night'
            total='$345 / night'
            />

            <InfoCard img='https://i.ibb.co/q1dM8tt/pexels-terry-magallanes-2631746.jpg' 
            location='Private room in center of London' 
            title="Happy Johnson Home"
            description="5 guest . 2 bedroom . 4 bed . Wifi. Kitchen . Free parking"
            star="5.00"
            price='$225 / night'
            total='$322 / night'
            />
            </div>
           
        </section>

      </main>
      <Footer/>
    </div>
  )
}

export default Search

//Server side dynamic rendering
// export async function getServerSideProps(){
//   const searchResults = await fetch('https://links.papareact.com/isz').then(res => res.json());
//   return {
//     props: {
//       searchResults
//     }
//   }
// }
