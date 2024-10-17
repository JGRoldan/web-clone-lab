const Header = () => {
    return (
        <header className='p-4 flex items-center justify-end'>
            <div className='flex items-center space-x-2'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={1}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='icon icon-tabler icons-tabler-outline icon-tabler-user'
                >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                    <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0' />
                    <path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
                </svg>
                <h1>admin.ar132456</h1>
            </div>
        </header>
    )
}

export default Header