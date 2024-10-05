/* import {Main} from '../components/main'; */
import {Header} from '../components/header';
import frontPageImg from '../assets/piloneras_1.png'
/* import {Footer} from '../components/footer'; */

function HomePage() {

  return (
    <>
      <Header/>
      <main className='w-full pt-8'>
        <section className='w-full h-64'>
          <div className='relative w-full h-full flex flex-col justify-evenly items-center text-center'>
            <h1 className='w-4/5 text-2xl font-bold text-textTitle z-10'>ACADEMIA DE BAILE CARINA CELEDÓN</h1>
            <p className='font-bold text-white z-10'>Somos una academia de baile con 4 años de experiencia en danzas</p>
            <button className='p-2 rounded-lg text-base font-bold bg-secondary-color z-10'>VER PROGRAMAS</button>
            <img src={frontPageImg} alt="Piloneras" className='absolute w-full h-full top-0 object-cover'/>
            <div className='absolute w-full h-full bg-front-background opacity-75 top-0'></div>
          </div>
        </section>
        <section className='w-11/12 pt-3 my-0 mx-auto text-sm text-textBody text-justify'>
            <p className=''>La Academia De Baile Carina Celedón enseña el arte de bailar los diferentes tipos de danzas  o bailes más conocidos y representativos. </p>
            <p className='mt-1'>El primer objetivo es enseñar a bailar los 4 ritmos de la música Vallenata como baile de salón y de fiesta de forma personalizado o semipersonalizado. </p>
            <div className='flex items-center justify-center w-full h-40 mt-4 mb-4 rounded-lg bg-slate-800'>
              <p className='text-white'>Video de presentación</p>
            </div>
        </section>
        <section>

        </section>
      </main>
    </>
      
  )
}

export {HomePage};