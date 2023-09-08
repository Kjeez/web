import Link from "next/link";
import {RiLinkedinLine, RiInstagramLine, RiDribbbleLine, RiBehanceLine, RiGithubLine, RiTwitchLine} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'https://www.instagram.com/kunal.codes/'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiInstagramLine/>
      </Link>
      <Link href={'https://www.linkedin.com/in/kunal-gautam-82a59512a/'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine/>
      </Link>
      <Link href={'https://dribbble.com/gotdesign'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiDribbbleLine/>
      </Link>
      <Link href={'https://www.behance.net/kunalgautam8'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiBehanceLine/>
      </Link>
      <Link href={'https://github.com/Kjeez'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiGithubLine/>
      </Link>
      <Link href={'https://twitter.com/klster14'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiTwitchLine/>
      </Link>
    </div>
  )
}

export default Socials