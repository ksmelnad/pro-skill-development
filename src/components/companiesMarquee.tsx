import Image from "next/image";

const CompaniesMarquee: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 pt-14 pb-4">
      <div className="text-center">
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent,black,transparent)]">
          <ul
            x-ref="logos"
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          >
            <li>
              <Image
                src="./facebook.svg"
                width={80}
                height={40}
                alt="Facebook"
              />
            </li>
            <li>
              <Image src="./disney.svg" width={80} height={40} alt="Disney" />
            </li>
            <li>
              <Image src="./airbnb.svg" width={80} height={40} alt="Airbnb" />
            </li>
            <li>
              <Image src="./apple.svg" width={80} height={40} alt="Apple" />
            </li>
            <li>
              <Image src="./spark.svg" width={80} height={40} alt="Spark" />
            </li>
            <li>
              <Image src="./samsung.svg" width={80} height={40} alt="Samsung" />
            </li>
            <li>
              <Image src="./quora.svg" width={80} height={40} alt="Quora" />
            </li>
            <li>
              <Image src="./sass.svg" width={80} height={40} alt="Sass" />
            </li>
          </ul>
          <ul
            x-ref="logos"
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          >
            <li>
              <Image
                src="./facebook.svg"
                width={80}
                height={40}
                alt="Facebook"
              />
            </li>
            <li>
              <Image src="./disney.svg" width={80} height={40} alt="Disney" />
            </li>
            <li>
              <Image src="./airbnb.svg" width={80} height={40} alt="Airbnb" />
            </li>
            <li>
              <Image src="./apple.svg" width={80} height={40} alt="Apple" />
            </li>
            <li>
              <Image src="./spark.svg" width={80} height={40} alt="Spark" />
            </li>
            <li>
              <Image src="./samsung.svg" width={80} height={40} alt="Samsung" />
            </li>
            <li>
              <Image src="./quora.svg" width={80} height={40} alt="Quora" />
            </li>
            <li>
              <Image src="./sass.svg" width={80} height={40} alt="Sass" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompaniesMarquee;
