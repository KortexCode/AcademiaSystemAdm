import { Link as CrossLink, Element } from 'react-scroll';
import { Header } from '../components/header';
import { CourseCard } from '../components/courseCard';
import { Footer } from '../components/footer';
import { cardInfo } from '../utils/cardsInfo';
import frontPageImg from '../assets/piloneras_1.png';
/* import {Footer} from '../components/footer'; */


function HomePage() {

  console.log(cardInfo)

  return (
    <>
      <Header/>
      <main className='w-full pt-8'>
        <section className='w-full h-64'>
          <div className='relative w-full h-full flex flex-col justify-evenly items-center text-center'>
            <h1 className='w-4/5 text-4xl font-bold text-textTitle z-10'>ACADEMIA DE BAILE CARINA CELEDÓN</h1>
            <p className='font-bold text-white z-10'>Somos una academia de baile con 4 años de experiencia en danzas</p>
            <CrossLink to="programas" className="z-10">
              <button className='p-2 rounded-lg text-base font-bold bg-secondary-color z-10'>VER PROGRAMAS</button>
            </CrossLink>
            <img src={frontPageImg} alt="Piloneras" className='absolute w-full h-full top-0 object-cover'/>
            <div className='absolute w-full h-full bg-front-background opacity-75 top-0'></div>
          </div>
        </section>

        <section className='w-11/12 pt-3 my-0 mx-auto text-sm text-textBody text-justify'>
            <p className='font-semibold'>La Academia De Baile Carina Celedón enseña el arte de bailar los diferentes tipos de danzas  o bailes más conocidos y representativos. </p>
            <p className='mt-1 font-semibold'>El primer objetivo es enseñar a bailar los 4 ritmos de la música Vallenata como baile de salón y de fiesta de forma personalizado o semipersonalizado. </p>
            <div className='flex items-center justify-center w-full h-60 mt-6 mb-4 rounded-lg bg-slate-800'>
              <p className='text-white'>Video de presentación</p>
            </div>
        </section>

        <Element name="programas" className='flex flex-col items-center w-11/12 pt-8 my-0 mx-auto text-sm text-textBody'>
          <h1 className='mb-8 text-4xl font-bold text-primary-color text-center'>PROGRAMAS</h1>
          {cardInfo.map((item, index) => (<CourseCard key={index} title={item.title} img={item.img} descrip={item.description} to={item.to} />))} 
        </Element>

        <section className='w-11/12 pt-8 my-0 mx-auto text-sm text-textBody'>
          <h1 className='mb-8 text-4xl font-bold text-primary-color text-center'>PRÓXIMAS PRESENTACIONES</h1>
          
          <div className='w-full mb-4 pb-2 shadow-sm'>
            <h2 className=" mb-4 text-xl font-bold">Concurso de k-pop evento cultura coreana 2024</h2>
            <p className="mb-3 font-bold">Próximamente 23 de Octubre</p>
            <p className="mb-3 font-semibold">Tendremos una presentación de danza k-pop en el centro comercial Guatapurí categoría juvenil.</p>     
          </div>

          <div className='w-full mb-4 pb-2 shadow-sm'>
            <h2 className=" mb-4 text-xl font-bold">Concurso de género urbano kid&apos;s talent </h2>
            <p className="mb-3 font-bold">Próximamente 1 de Noviembre</p>
            <p className="mb-3 font-semibold">Estaremos participando en el concurso Kid&apos;s Talent de la agencia Dance Revolution por la categoría infantil en el auditorio Pasaje del bosque</p>     
          </div>
        </section>
        
        <section className='w-full my-8'>
          <h2 className='text-xl font-bold text-primary-color text-center'>Conoce Nuestra Ubicación</h2>
          <div className='flex items-center justify-center w-full h-60 mt-6 rounded-lg bg-slate-800'>
                <p className='text-white'>Aquí va el mapa de navegación</p>
          </div>
        </section>
      </main>
      <Footer/>
    </>
      
  )
}

export {HomePage};