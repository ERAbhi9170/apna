import Image from 'next/image';
import DreamJobCard from "../DreamJobCard";
import one from '../../public/10.svg';
import two from '../../public/2.svg';
import three from '../../public/3.svg'
import shutterstock1 from '../../public/shutterstock1.png';
import shutterstock2 from '../../public/shutterstock2.png';
import shutterstock3 from '../../public/shutterstock3.png';
import Vector144 from '../../public/Vector144.png';
import Vector145 from '../../public/Vector145.png';

const DreamJob =()=>{
    
   const STEP =[
      {
         number:one,
         title:'Sign-up for the course',
         awatar:shutterstock1,
         background:'bg-yellow-500'
      },
      {
         number:two,
         title:'Get trained by industry experts',
         awatar:shutterstock2,
         background:'bg-amber-500'
      },
      {
         number:three,
         title:'Give interviews & get dream job',
         awatar:shutterstock3,
         background:'bg-teal-500'
      }
   ]

   return(
            <div className="flex flex-col items-center bg-primary h-screen lg:flex-row justify-center">
               {
                  STEP.map((item,index)=>{
                   return(
                     <div key={item.title}>
                     {/* {index===1 && <Image src={Vector144} alt='vector144' className='absolute left-10' />} */}
                     <DreamJobCard  data={item} i={index} />
                     {/* {index===1 && <Image src={Vector145} alt='vector145'className='absolute right-11' />} */}
                     </div>
                   )
                  } )
               }
                       
            </div>
   )         
}
export default DreamJob;