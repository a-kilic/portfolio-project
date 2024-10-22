import photo from "../assets/photo.png";
const Header = () => {
  return (
    <section className="flex flex-col space-y-4">
      {/* Name & Photo */}
      <div className="flex items-center mx-auto">
        <div className="flex items-center space-x-4">
          <div>
            <p className="text-2xl text-center text-white">Arda Kilic</p>
            <img
              src={photo}
              alt="Avatar Photo"
              className="h-full w-[150px] border-2 rounded-xl"
            />
          </div>
        </div>
      </div>
      {/* Description and Links */}
      <div className="mx-auto space-y-2">
        {/* Links */}
        <div className="flex justify-center pb-2 space-x-4 border-b">
          <a
            href="https://www.linkedin.com/in/a-kilic/"
            className="text-center text-white hover:underline"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/a-kilic"
            className="text-white hover:underline"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href="mailto:arda.kilic@aol.com"
            className="text-white hover:underline"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
