import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="sumz_logo"  className='w-28 object-contain'/>
        <button type='button' onClick={() => window.open('https://github.com/deviskalo/')} className='black_btn'>
          Github
        </button>
      </nav>

      <h1 className='head_text'>
        Summerize Articles with <br className='max-md:hidden'/>
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h3 className='flex-1 font-satoshi text-blue-500 font-medium text-sm truncate mt-5'>Developed with ❤️ by Dev Iskalo</h3>
      <h2 className='desc'>
        Simplify your reading with Summarizer, an open-source
        article summerizer that transforms lengthy articles into 
        clear and concise summaries.
      </h2>
    </header>
  )
}

export default Hero