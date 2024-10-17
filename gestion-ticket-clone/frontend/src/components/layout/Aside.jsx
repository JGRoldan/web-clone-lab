import Nav from "@/components/nav/Nav"

const Aside = () => {

    return (
        <div className='w-60 h-full'>
            <div className='flex items-center justify-center'>
                <img
                    src='/'
                    alt='Imagen de un user + username + role.'
                    width={100}
                />
            </div>
            <Nav />
        </div>
    )
}


export default Aside