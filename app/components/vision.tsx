import visionImage from '../../public/images/vision.png'
import Image from 'next/image';
import Accordions from './accordion';


const Vision = () => {
  return (
    <section className="flex h-screen ">
      <div className='site_container flex justify-between align-center gap-10 px-4 mx-auto lg:max-w-7xl md:items-center md:flex-col md:px-8' >
        <div className="w-1/2">
          <div className="flex flex-col justify-center h-auto ">
          <h2 className="text-[38px] font-bold vision-font w-[699px]">
             <span className="text-white uppercase">our vision is to support the innovation of AI blockchain projects <span className="text-gradient uppercase">while prioritizing communities and democratizing <br/> profits</span></span>
            <br/>
           
          </h2>
            <Image
            className='w-[836px] h-[502px]'
              src={visionImage}
              alt="Image description"
            />
          </div>
        </div>
        <div className="w-[552px] h-[804] text-white">
          <Accordions/>
        </div>
      </div>
    </section>
  );
};

export default Vision;