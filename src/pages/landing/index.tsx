import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCircleHalfStroke, faWandMagicSparkles, faHashtag, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';

function Landing() {
  return (
    <div>
      <section className='w-full h-screen bg-black text-white flex flex-col items-center'>
        <div className='py-[30px] px-[30px] flex justify-between w-full items-center'>
          <div>
          <FontAwesomeIcon icon={faHashtag} size="xl" className='cursor-pointer opacity-50 hover:opacity-100'/>
          </div>
          <div>
            <button type="button" className='py-[10px] px-[20px] bg-white text-black rounded-lg font-montserrat font-bold text-[16px]'>Sign Up</button>
          {/* <FontAwesomeIcon icon={faCircleHalfStroke} size="xl" className='cursor-pointer opacity-50 hover:opacity-100'/> */}
          </div>
        </div>
        {/* <div className='font-montserrat font-medium text-[42px] mt-[300px]'>
          Flo
          <span className='text-[30px] font-semibold'>&Otilde;</span>
        </div> */}
        <div className='font-montserrat font-medium text-[46px] mt-[160px]'>
          Flo
          {/* <FontAwesomeIcon icon={faClockRotateLeft} size="2xs" className='pt-[6px] ml-[2px]'/> */}
          <span className='text-[34px] font-semibold'>&Otilde;</span>
        </div>
        <div className="mt-2 text-[14px] font-opensans font-medium opacity-40">
          Making productivity 10x easier
        </div>
      </section>
      <section className='w-full h-[600px]'>
        <div className="-mt-[140px] mx-[10px] py-[20px] px-[10px] min-h-[300px] bg-gray-800 rounded-[40px]">
          <div className="flex gap-[12px] items-center justify-center">
            <span className="font-montserrat text-white text-[15px] font-medium">Last Week Winner</span>
            <span className="relative px-[20px] py-[10px] bg-green-300 text-black rounded-full font-bold font-montserrat">
              Jeremiah Elvis
              <div className='absolute top-[-10px] right-[-10px]'>
                  <FontAwesomeIcon icon={faWandMagicSparkles} size="xl" className='text-pink-500' bounce/>
              </div>
            </span>
          </div>
          <div className='mt-[90px] flex gap-[8px] justify-center items-center'>
            <div className='text-[50px] text-center font-montserrat text-white flex items-center justify-center gap-[16px]'>
              <span className='bg-white text-[100px] text-black py-[10px] px-[20px] rounded-lg font-bold'>
                00
              </span>
              <span>
                :
              </span>
              <span className='bg-white text-[100px] text-black p-[10px] px-[20px] rounded-lg font-bold'>
                05
              </span>
            </div>
            <div>
              <div className='text-[40px] text-white font-semibold font-opensans ml-[60px]'>Begin Flow</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Landing;
