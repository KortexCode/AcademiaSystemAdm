import "../styles/menu.css";

function Dashboard() {
  const userName = "Admin";

  return (
    <div className="flex flex-col items-center justify-center w-full h-full pt-16 mx-auto px-4 sm:px-6  lg:px-8 md:pb-4">
      <div className="flex flex-col self-center items-center my-0 mx-auto">
        <hr className="border-y-zinc-600"></hr>
        <p className="text-lg font-semibold text-primary">
          Bienvenido, {userName}
        </p>
      </div>
      {/* PERFIL */}
      
   
    </div>
  );
}

export { Dashboard };
