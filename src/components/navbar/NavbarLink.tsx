type NavbarLinkProps = {
    path: string,
    title: string,
    isSelected: boolean,
    clickHandler: (name: string) => void
}

export default function NavbarLink({path, title, isSelected, clickHandler}: NavbarLinkProps) {
  
  return (
    <a
        href={path} 
        className={`px-4 py-1 rounded-lg text-lg text-center font-semibold text-white flex justify-center items-center transition-all duration-500
                    ${isSelected? "bg-white text-gray-900" : " hover:bg-white hover:text-gray-900"} `}
        onClick={() => clickHandler(title)}
    >
      {title}
    </a>
  )
}
