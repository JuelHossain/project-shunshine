export default function Companys() {
  const companys = [
    {
      name: "Magnito Digital",
      logo: "https://magnitodigital.com/wp-content/uploads/2016/03/m-logo-box-w.png",
      description:
        "Magnito Digital is the largest digital agency of Bangladesh with a team of more than 90 people. We are famous for our unconventional company culture. Our experience and massive setup allows us to deliver services",
    },
    {
      name: "Optimizely Ltd",
      logo: "https://www.the5thconference.com/wp-content/uploads/2021/06/Optimizely_Logo_Mono_Light_Digital.png",
      description:
        "At Optimizely, we're on a mission to help people unlock their digital potential. With our leading digital experience platform (DXP), we equip teams with the tools and insights they need to create and optimize in new and novel ways.",
    },
    {
      name: "South Tech",
      logo: "https://www.southtechgroup.com/wp-content/uploads/2019/07/southtech-logo.svg",
      description:
        "n the last 26+ years, Southtech Group has grown from a small software business in Dhaka with only 4 employees to now a family of over 90. Southtech’s growth is anexample of true entrepreneurial spirit and an unwavering passion to work towards the interest of humanity.",
    },
  ];
  return (
    <section className="p-6 dark:bg-gray-800 dark:text-gray-100 ">
      <div className="container mx-auto">
        <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase dark:text-violet-400">
          Top Companys
        </span>
        <h2 className="text-5xl font-bold text-center dark:text-gray-50">Working with us</h2>
        <div className="grid gap-6 my-16 lg:grid-cols-3">
          {companys.map(({ name, logo, description }) => (
            <div key={name} className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900 justify-between">
              <div className="flex flex-col  space-y-4 ">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-400 dark:text-gray-900">
                  <img src={logo} alt={name} />
                </div>

                <p className="text-2xl font-semibold">{name}</p>
                <hr />
                <p className="">{description}</p>
              </div>

              <div className=" justify-self-end py-2 px-4 bg-violet-400 dark:text-gray-900">View Details</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
