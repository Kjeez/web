import Image from "next/image";

const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -right-10 bottom-10 xl:-right-16 xl:-bottom-2 mix-blend-color-dodge
    animate-pulse duration-75 z-10">
      <Image src={'/circles.png'} width={260} height={200}
      className="w-full h-full"
      priority={false}
      alt="circle"/>
    </div>
  )
}

export default Circles