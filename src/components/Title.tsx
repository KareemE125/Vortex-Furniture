export default function Title({title}: {title: string}) {
  return (
    <div className="w-fit mx-2 m-8 p-2 border-b-4 ">
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white'>
            {title}
        </h1>
    </div>
  )
}
