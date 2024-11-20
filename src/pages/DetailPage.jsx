import { useEffect, useState, useRef } from 'react';
import video from '../assets/Zee.mp4';
import Header from '../assets/Zee-UI.png';
import ReactPlayer from 'react-player/lazy';
import netflixLogo from '../assets/netflix.png';
import logo4k from '../assets/4k.webp';
import lovely1 from '../assets/zee1.jpg';
import lovely2 from '../assets/zee2.jpg';
import lovely3 from '../assets/zee3.jpg';
import lovely4 from '../assets/zee4.jpg';
import lovely5 from '../assets/zee5.jpg';
import lovely6 from '../assets/zee6.jpg';
import Image1 from '../assets/1.jpg';
import Image2 from '../assets/2.jpg';
import Image3 from '../assets/3.jpg';
import Image4 from '../assets/4.jpg';
import Image5 from '../assets/5.jpg';
import Image6 from '../assets/6.jpg';
import Image7 from '../assets/7.jpg';
import Image8 from '../assets/8.jpg';
import Image9 from '../assets/9.jpg';
import GuestIcon from '../assets/Guest.webp';
import axios from 'axios';
const { VITE_API_URL } = import.meta.env;
const DetailPage = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [comments, setComments] = useState([]);
  const handleNameChange = (e) => {
    const { value } = e.target;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setName(value);
    } else {
      window.alert('oops unsupported character found');
    }
  };
  const fetchComment = async () => {
    try {
      setLoading(true);
      const getComment = await axios.get(`${VITE_API_URL}/wish`);
      setComments(getComment?.data?.data);
    } catch (error) {
      alert('error when fetch comment');
      setComments([]);
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsSubmitting(true);
      const insert = await axios.post(`${VITE_API_URL}/wish`, {
        name,
        message,
      });
      if (insert.data) {
        alert(insert.data.message);
      }
      fetchComment();
    } catch (error) {
      alert(error.response.data.message || 'error when input');
    } finally {
      setName('');
      setMessage('');
      setIsSubmitting(false);
    }
  };
  const scrollCommentRef = useRef(null);

  useEffect(() => {
    fetchComment();
  }, []);
  useEffect(() => {
    if (scrollCommentRef.current) {
      scrollCommentRef.current.scrollTop =
        scrollCommentRef.current.scrollHeight;
    }
  }, [comments]);

  return !loading ? (
    <div className='flex w-full bg-black text-white pb-4 cursor-not-allowed'>
      <div className='w-full max-w-md mx-auto flex flex-col relative flex-grow'>
        <div className='top-0 left-0 right-0'>
          <ReactPlayer
            url={video}
            loop={true}
            playing={true}
            width='100%'
            height='auto'
            style={{ aspectRatio: '16 / 9' }}
          />
        </div>
        <div className='mt-4 px-4'>
          <div className='flex flex-wrap font-sans'>
            <img src={netflixLogo} alt='NikahFix Logo' className='w-4 h-auto' />
            <span className='font-sans pl-1 text-gray-500 text-xs font-medium uppercase'>
              Documenter
            </span>
          </div>
          <div className='flex flex-col mt-2'>
            <div className='text-white text-xl font-sans font-bold'>
              Usra & Zee: Meinkah
            </div>
            <div className='flex items-center'>
              <span className='text-green-500'>100% match</span>
              <span className='bg-slate-500 text-xs ml-2 px-1 py-0 rounded-sm'>
                SU
              </span>
              <span className='ml-2'>2024 1h 26m</span>
              <img src={logo4k} alt='logo4k' className='ml-2' />
              <img src={logo4k} alt='logo4k' className='ml-2' />
            </div>
            <div className='flex flex-col mt-2'>
              <span className='bg-[#E50913] px-2 py-0 max-w-fit flex items-center justify-center rounded-sm'>
                Coming soon on Monday, 17 January 2050.
              </span>
              <div className='text-white mt-2'>
                Setelah Usra Dan Zee dipertemukan di Antah-berantah dalam kondisi
                tepat, di mana keduanya telah siap untuk memulai hubungan
                bersama, tibalah mereka di awal perjalanan baru menuju
                pernikahan.
              </div>
              <div className='mt-2 text-xs text-gray-500'>
                "Segala sesuatu Kami ciptakan berpasang-pasangan agar kamu
                mengingat (kebesaran Allah)" (Q.S Az-Zariyah: 49).
              </div>
            </div>
            <div className='mt-6'>
              <header className='text-lg font-bold'>Breaking News</header>
              <img
                src={Header}
                alt=''
                srcSet=''
                style={{ aspectRatio: '16 / 9' }}
                className='mt-2 rounded-md'
              />
              <div className='text-sm italic pt-2 text-gray-500'>
                <p className='mt-2'>
                  Halo! Karena kalian adalah orang penting yang mengisi
                  hari-hari kami, kami ingin informasikan bahwa kami akan segera
                  menikah!
                </p>
                <p className='mt-4'>
                  Tapi sebelumnya, kami mohon maaf kepada teman dan kerabat
                  semua karena tidak bisa mengundang kalian hadir di hari
                  bahagia kami, dikarenakan pernikahan kami bersifat intimate
                  wedding yang dilaksanakan di Bekasi dan hanya dihadiri oleh
                  keluarga dan orang terdekat.
                </p>
                <p className='mt-4'>
                  Walaupun begitu, kami harapkan sebaik-baiknya doa untuk
                  kelancaran pernikahan dan hari-hari bahagia setelahnya.
                </p>
                <p className='mt-4'>
                  Dengan penuh cinta,
                  <br />
                  The bride and groom
                </p>
              </div>
            </div>
            <div className='mt-6'>
              <header className='text-lg font-bold'>Bride and Groom</header>
              <div className='grid grid-cols-2 w-full gap-4'>
                <div className='flex flex-col'>
                  <img
                    src={lovely1}
                    alt=''
                    srcSet=''
                    style={{ aspectRatio: '16 / 9' }}
                    className='mt-2 rounded-2xl'
                  />
                  <div className='flex flex-col mt-2'>
                    <span className='text-white'>Zee</span>
                    <span className='text-sm text-gray-500 mt-2'>
                      Witch of Greed
                    </span>
                  </div>
                </div>
                <div className='flex flex-col'>
                  <img
                    src={lovely2}
                    alt=''
                    srcSet=''
                    style={{ aspectRatio: '16 / 9' }}
                    className='mt-2 rounded-2xl'
                  />
                  <div className='flex flex-col mt-2'>
                    <span className='text-white'>Zee</span>
                    <span className='text-sm text-gray-500 mt-2'>
                      Witch of Greed
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-6'>
              <header className='text-lg font-bold'>Our Love Story</header>
              <div className='grid grid-cols-1 gap-4'>
                {/* Episode1 */}
                <div className='flex flex-col'>
                  <div className='grid grid-cols-2 gap-5'>
                    <img
                      src={lovely3}
                      alt=''
                      srcSet=''
                      style={{ aspectRatio: '16 / 9' }}
                      className='mt-2 rounded-2xl'
                    />
                    <div className='flex flex-col justify-center'>
                      <div className='text-white'>
                        Episode 1: How We Meet Each Other that Time
                      </div>
                      <div className='text-[#A3A1A1]  text-sm mt-2'>
                        26m 10s
                      </div>
                    </div>
                  </div>
                </div>
                <div className='text-[#A3A1A1] text-sm'>
                  Usra dan Zee pertama kali bertemu di isekai. Karena
                  sering memiliki kepentingan yang berbahya, Zee jadi sering
                  bertemu dengan Usra.
                </div>
                <div className='flex flex-col'>
                  <div className='grid grid-cols-2 gap-5'>
                    <img
                      src={lovely4}
                      alt=''
                      srcSet=''
                      style={{ aspectRatio: '16 / 9' }}
                      className='mt-2 rounded-2xl'
                    />
                    <div className='flex flex-col justify-center'>
                      <div className='text-white'>
                        Episode 2: A Love That Grows With Time
                      </div>
                      <div className='text-[#A3A1A1]  text-sm mt-2'>
                        26m 10s
                      </div>
                    </div>
                  </div>
                </div>
                <div className='text-[#A3A1A1]  text-sm'>
                  Hari demi Hari terlewati rasa cinta pun tumbuh diantara mereka
                  berdua.
                </div>
                <div className='flex flex-col'>
                  <div className='grid grid-cols-2 gap-5'>
                    <img
                      src={lovely5}
                      alt=''
                      srcSet=''
                      style={{ aspectRatio: '16 / 9' }}
                      className='mt-2 rounded-2xl'
                    />
                    <div className='flex flex-col justify-center'>
                      <div className='text-white'>
                        Episode 3: Choose to Spend Life Together
                      </div>
                      <div className='text-[#A3A1A1]  text-sm mt-2'>
                        26m 10s
                      </div>
                    </div>
                  </div>
                </div>
                <div className='text-[#A3A1A1] text-sm'>
                  Seringkali Usra memberitahu kepada Zee bahwa ia tertarik
                  dan ingin menjalanin Hubungan lebih serius.
                </div>
                <div className='flex flex-col'>
                  <div className='grid grid-cols-2 gap-5'>
                    <img
                      src={lovely6}
                      alt=''
                      srcSet=''
                      style={{ aspectRatio: '16 / 9' }}
                      className='mt-2 rounded-2xl'
                    />
                    <div className='flex flex-col justify-center'>
                      <div className='text-white'>
                        [Coming Soon] Final Episode: The Beginning of Forever
                      </div>
                      <div className='text-[#A3A1A1]  text-sm mt-2'>
                        26m 10s
                      </div>
                    </div>
                  </div>
                </div>
                <div className='text-[#A3A1A1]  text-sm'>
                  Kasihan VVOTA halu cuy 😭☝
                </div>
              </div>
            </div>
            <div className='mt-6'>
              <header className='text-lg font-bold'>Our Love Gallery</header>
              <div className='grid grid-cols-3 gap-3'>
                <img
                  src={Image1}
                  alt=''
                  srcSet=''
                  style={{ aspectRatio: '9 / 16' }}
                  className='rounded-2xl hover:scale-125 transition-all duration-300 ease-in-out'
                />
                <img
                  src={Image2}
                  alt=''
                  srcSet=''
                  style={{ aspectRatio: '9 / 16' }}
                  className='rounded-2xl hover:scale-125 transition-all duration-300 ease-in-out'
                />
                <img
                  src={Image3}
                  alt=''
                  srcSet=''
                  style={{ aspectRatio: '9 / 16' }}
                  className='rounded-2xl hover:scale-125 transition-all duration-300 ease-in-out'
                />
                <img
                  src={Image4}
                  alt=''
                  srcSet=''
                  style={{ aspectRatio: '9 / 16' }}
                  className='rounded-2xl hover:scale-125 transition-all duration-300 ease-in-out'
                />
                <img
                  src={Image5}
                  alt=''
                  srcSet=''
                  style={{ aspectRatio: '9 / 16' }}
                  className='rounded-2xl hover:scale-125 transition-all duration-300 ease-in-out'
                />
                <img
                  src={Image6}
                  alt=''
                  srcSet=''
                  style={{ aspectRatio: '9 / 16' }}
                  className='rounded-2xl hover:scale-125 transition-all duration-300 ease-in-out'
                />
                <img
                  src={Image7}
                  alt=''
                  srcSet=''
                  style={{ aspectRatio: '9 / 16' }}
                  className='rounded-2xl hover:scale-125 transition-all duration-300 ease-in-out'
                />
                <img
                  src={Image8}
                  alt=''
                  srcSet=''
                  style={{ aspectRatio: '9 / 16' }}
                  className='rounded-2xl hover:scale-125 transition-all duration-300 ease-in-out'
                />
                <img
                  src={Image9}
                  alt=''
                  srcSet=''
                  style={{ aspectRatio: '9 / 16' }}
                  className='rounded-2xl hover:scale-125 transition-all duration-300 ease-in-out'
                />
              </div>
            </div>
            <div className='mt-6'>
              <header className='text-lg font-bold'>Wish for the couple</header>
              <div
                className='max-h-[55svh] min-h-[15svh] overflow-y-auto mt-2 bottom-0'
                ref={scrollCommentRef}
              >
                {!loading &&
                  comments?.map((item, i) => (
                    <div key={i} className='flex pt-2'>
                      <div className='flex items-center'>
                        <img
                          src={GuestIcon}
                          alt=''
                          srcSet=''
                          className='w-6 h-auto'
                        />
                      </div>
                      <div className='flex flex-col ps-2 justify-between items-start w-full h-full text-sm pt-2'>
                        <div className='text-white text-sm capitalize'>
                          {item.name}
                        </div>
                        <div className='text-gray-400'>{item.message}</div>
                      </div>
                    </div>
                  ))}
              </div>

              <form onSubmit={handleSubmit} className='space-y-4 mt-4 relative'>
                <div className='pb-2'>
                  <label htmlFor='' className='mb-2 font-sans'>
                    Name
                  </label>
                  <input
                    type='text'
                    value={name}
                    onChange={(e) => handleNameChange(e)}
                    className='w-full mt-4 p-2 text-black font-sans'
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor='' className='mb-2 font-sans'>
                    Message
                  </label>
                  <textarea
                    value={message}
                    aria-expanded={false}
                    onChange={(e) => setMessage(e.target.value)}
                    className='w-full mt-4 text-black p-2 font-sans'
                    disabled={isSubmitting}
                  />
                </div>
                <button
                  type='submit'
                  className='w-full bg-black'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
            <div className='mt-6 text-center text-sm'>
              <span className=''>
                Thank you for checking up all the things up there!
              </span>
              <br />
              <span>Can’t wait to see u again!</span>
            </div>
            <div className='mt-12 text-xs text-center text-[#A3A1A1]'>
              Cloning with ❤️ by janexmgd & supported by SGBTeam
            </div>
            <div className='mt-5 text-xs cursor-pointer text-center mb-5'>
              <a
                href='https://xsrazy.my.id'
                target='_blank'
                rel='noopener noreferrer'
              >
                Thanks NikahFIX
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className='flex w-full bg-black text-white pb-4 cursor-not-allowed h-svh text-4xl text-center justify-center items-center'>
      Loading
    </div>
  );
};

export default DetailPage;
