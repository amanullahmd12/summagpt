import {logo} from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="summify-logo" className=" w-60 object-contain" />
        <button
          type="button"
          onClick={() => window.open ('https://github.com/amanullahmd12')}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
       Simplifying Complex Articles,  <br className="max-md:hidden" />
        <span className="orange_gradient">Empowering You!</span>
      </h1>
      <h2 className="desc word-wrap">
      Unleash the power of simplified reading with SummaGPT! As an open-source article summarizer, SummaGPT revolutionizes your reading experience by transforming lengthy articles into clear and concise summaries. Say goodbye to information overload and effortlessly absorb key insights with SummaGPT by your side.
      </h2>
    </header>
  );
};

export default Hero;
