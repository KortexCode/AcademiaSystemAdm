import { useEffect } from "react";
import { Header } from "../components/header";
import academiaImg from "../assets/academia_1.png";
import carinaImg from "../assets/carina.jpeg";


function AboutUs () {

     useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Header/>
            <div className="relative flex justify-center items-center w-full h-72 bg-orange-400">
                <h2 className="text-5xl pt-12 font-bold text-black">SOBRE NOSOTROS</h2>
                <figure className="absolute w-80 h-44 bottom-0 translate-y-3/4 object-fill">
                    <img src={academiaImg} alt="imagen de la academia" className="w-full rounded-lg object-fill"/>
                </figure>
            </div>

            <section className="w-10/12 mt-60 mb-16 mx-auto text-justify">
                <p className="mb-4 text-textBody">La Academia De Baile Carina Celedón enseña el arte de bailar los diferentes tipos de danzas o bailes más conocidos y representativos. </p>
                <p className="mb-4 text-textBody">El primer objetivo es enseñar a bailar los 4 ritmos de la música Vallenata como baile de     salón y de fiesta de forma personalizado o semipersonalizado. </p>
                <p className="mb-4 text-textBody">Contamos con programas de formación para niños desde los 4 a 15 años donde aprender a    distinguir los diferentes ritmos estudiándolos para aprender a bailarlos como baile social,    danza, competencias y presentaciones. </p>
                <p className="text-textBody">También ofrecemos vacacionales y bailo terapias.</p>
            </section>

            <section className="flex w-10/12 mt-0 mx-auto mb-12 justify-between">
                <div className="flex flex-col w-1/2 mr-8 justify-center">
                    <h2 className="mb-2 font-bold text-center">MISIÓN</h2>
                     <p className="text-lg font-light text-neutral-950">Nuestra misión es enseñar a bailar los 4 ritmos vallenatos y externder el folclor y la cultura vallenata como patrimonio de la humanidad</p>
                </div>
                <div className="flex items-center w-1/2">
                    <figure className="w-full md:w-96">
                       <img src={academiaImg} alt="imagen de misión" className="rounded-lg object-cover"/>
                    </figure>
                </div>
            </section>
            <section className="flex w-10/12 mt-0 mx-auto mb-16 justify-between">
                <div className="flex items-center w-1/2 mr-8">
                    <figure className="w-full md:w-96">
                       <img src={academiaImg} alt="imagen de misión" className="rounded-lg object-cover"/>
                    </figure>
                </div>
                <div className="flex flex-col w-1/2 mb-4 justify-center">
                    <h2 className="mb-2 font-bold text-center">VISIÓN</h2>
                     <p className="text-lg font-light text-neutral-950">Seremos la Academia de baile más grande a nivel nacional, ganaremos todos los concursos y enseñaremos todos los ritmos existentes</p>
                </div>
            </section>
            <section className="flex flex-col items-center w-10/12 mt-0 mx-auto mb-5">
                <h2 className="mb-10 text-3xl text-center">¿Quién es Carina Cledón?</h2>
                <figure className="w-44 h-44 mb-10">
                    <img src={carinaImg} alt="foto de perfil de instructora Carina Celeón" className=" rounded-md object-cover"/>
                </figure>
                <p className="text-textBody text-justify">Carina Celedón, instructora de danza con experiencia en artes escénicas y danza, ha dirigido la academia de baile Carina Celedón por 5 años, Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, distinctio. Unde pariatur dolore doloribus debitis tempora vero ut blanditiis modi repellat aperiam laboriosam beatae mollitia odit, iure ratione reiciendis. Non!. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo recusandae voluptatum harum omnis cupiditate minima, voluptas fugit itaque a eaque quo tempora voluptatibus quos cum sit incidunt dolor ex placeat? 
                </p>
            </section>     
        </>
    )
}

export {AboutUs}