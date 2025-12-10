import cursos from "../assets/cursos.png";
const Header = () => {
   return (
    <header className="
  bg-yellow-500
  text-gray-900 
  p-4 
  flex 
  flex-col md:flex-row 
  items-center 
  justify-between 
  gap-6 
  w-full
  max-w-screen-xl
  mx-auto
">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
    
    <img src={cursos} alt="cursos"
      className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto mx-auto md:mx-0"
    />

    <h1 className="
      font-bold 
      text-3xl 
      sm:text-4xl 
      md:text-5xl 
      tracking-wide
      text-center
      animate-pulse
    ">
      MIS CURSOS
    </h1>

  </div>
</header>

  );
};

export default Header;
