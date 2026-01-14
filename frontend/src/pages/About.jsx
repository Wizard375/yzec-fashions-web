import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className="w-full md:max-w-112.5" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            accusantium excepturi pariatur obcaecati, voluptas reiciendis culpa
            adipisci aspernatur quas quidem eum, deleniti esse libero. At
            tempore pariatur ipsa minima iste?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
            corporis excepturi labore molestias illo, necessitatibus inventore
            ipsa cumque voluptates. Nemo est natus rem eius corporis
            reprehenderit ut ad libero nesciunt.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi quis
            maxime, deserunt id non nostrum nesciunt quam! Reprehenderit tenetur
            recusandae dicta deleniti voluptas, et non? Et cumque iure
            veritatis? Amet?
          </p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            molestias dignissimos delectus cum quisquam iste distinctio, quasi
            eos dolor tempore iusto architecto tempora officia nostrum
            perspiciatis. Itaque maiores consequatur hic.
          </p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            molestias dignissimos delectus cum quisquam iste distinctio, quasi
            eos dolor tempore iusto architecto tempora officia nostrum
            perspiciatis. Itaque maiores consequatur hic.
          </p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            molestias dignissimos delectus cum quisquam iste distinctio, quasi
            eos dolor tempore iusto architecto tempora officia nostrum
            perspiciatis. Itaque maiores consequatur hic.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
