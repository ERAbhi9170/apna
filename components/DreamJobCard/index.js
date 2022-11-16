
import Image from 'next/image';
import one from '../../public/10.svg'
import shutterstock1 from '../../public/shutterstock1.jpg'

const DreamJobCard = () => {
            return (
                        <div className=' flex align items-center justify-center pt-12 '>
                                    <div className='bg-secondary w-48 h-20 border-dashed border-2 border-golden rounded-2xl relative'>
                                                <Image src={one} alt='1' width={32} height={64} className='absolute -top-9 left-0' />
                                                <p className='pl-12 text-start pt-3 text-white'>Sign-up for the course</p>
                                    </div>
                                    <div className='w-16 h-16'>
                                                <Image className='rounded-full ml-3' src={shutterstock1} alt='shutterstock1' />
                                    </div>
                        </div>
            )
}
export default DreamJobCard;