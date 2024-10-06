
import { useEffect } from "react";
import { Header } from "../components/header"
import academiaImg from "../assets/academia_1.png";


function TrainingProgram() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Header/>
            <section className='w-full h-64'>
              <div className='relative w-full h-full flex flex-col justify-evenly items-center text-center'>
                <h2 className='w-4/5 text-5xl font-bold text-secondary-color text-center z-10'>FORMACION</h2>
                <img src={academiaImg} alt="Piloneras" className='absolute w-full h-full top-0     object-cover'/>
                <div className='absolute w-full h-full bg-front-background opacity-75 top-0'></div>
              </div>
            </section>
            <section className="my-0 mx-auto w-11/12">
                <div className="my-4">
                    <p className='mt-6 font-semi-bold text-textBody'>Somos una academia de baile con 4 años     de  experiencia en danzas. Nuestro plan Formación se clasifica en categoría infantil,   juvenil, adulto y edad de oro</p>
                    <p className='mt-2 font-semi-bold text-textBody'>Aprenderán los 4 ritmos Vallenatos     además de otros varios géneros musicales</p>
                </div>
                <div className="flex justify-center w-full my-8">
                    <div className="w-80 h-48 bg-zinc-700">

                    </div>
                </div>
                <div className="w-full mb-4">
                    <h2 className="mb-6 text-3xl">Tenemos los siguientes grupos disponibles</h2>
                    <div className="w-full mb-4">
                        <h3 className="mb-2 text-2xl text-slate-900 font-semi-bold">Categoría infantil</h3>
                        <p className="mb-1 text-textBody">Sábado de 9 a 12 pm</p>
                        <p className="mb-1 text-textBody">Sábado de 2 a 5 pm</p>
                    </div>
                    <div className="w-full mb-4">
                        <h3 className="mb-2 text-2xl text-slate-900 font-semi-bold">Categoría Juvenil</h3>
                        <p className="mb-1 text-textBody">Sábado de 9 a 12 pm</p>
                        <p className="mb-1 text-textBody">Martes, Miércoles y Jueves de 5:30 a 6:30 pm</p>
                    </div>
                    <div className="w-full">
                        <h3 className="mb-2 text-2xl text-slate-900 font-semi-bold">Categoría Adulto</h3>
                        <p className="mb-1 text-textBody">Martes, Miércoles y Jueves de 5:30 a 6:30 pm</p>
                    </div>       
                </div>
            </section>
        </>
    )
}

export {TrainingProgram}