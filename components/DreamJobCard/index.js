
import Image from 'next/image';
import Vector144 from '../../public/Vector144.png';
import Vector145 from '../../public/Vector145.png';


const DreamJobCard = ({ data ,i }) => {
     const { number, title, awatar,background } = data;
     return (
          <div className={`flex  align items-center justify-center pt-12 ${i==1?'flex-row-reverse ml-9 sm:ml-20 lg:flex-row mr-9':''}`}>
               <div className='bg-secondary w-48 h-20 border-dashed border-2 border-golden rounded-2xl relative'>
               {i===1 && <Image src={Vector144} alt='vector144' className='absolute -left-20 -top-12 lg:top-16 lg:-rotate-90' />}
               {i===1 && <Image src={Vector145} alt='vector145'className='absolute top-20 right-2 lg:-top-16 lg:-right-16 lg:-rotate-90' />}
                    <Image src={number} alt='1' width={32} height={64} className='absolute -top-7 left-1' />
                    <p className='pl-12 text-start pt-3 text-white'>{title}</p>
               </div>
               <div className='w-16 h-16 lg:-translate-x-5'>
                    <Image className ={`rounded-full m-3 ${background} ${i==1?'p-1':''}`}  src={awatar} alt='shutterstock1' height={46}/>
               </div>
          </div>
     )
}
export default DreamJobCard;