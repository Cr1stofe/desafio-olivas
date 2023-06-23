'use client'

import { useEffect, useState } from 'react'
import { NavegationBar } from './NavegationBar'

import { VscChromeClose } from 'react-icons/vsc'
import { CgMenuRightAlt, CgSearch } from 'react-icons/cg'
import { AiOutlineMail } from 'react-icons/ai'

import logo from '../../../assets/logo.png'
import Image from 'next/image'

export function Navbar() {
    /* Saber se menu mobile está visível */
    const [isOpen, setIsOpen] = useState(false);

    /* Bloquear scroll */
    useEffect(() => {
        document.body.style.overflowY = isOpen ? 'hidden' : 'auto';
    }, [isOpen])

    return (
        /* Container principal */
        <div>
            {/* Menu Mobile aberto*/}
            <div className={`flex items-center justify-center fixed z-[1] bg-ocean-blue-900 h-full w-full ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition duration-300`}>
                {/* Icone para fechar */}
                <div className='absolute top-10 right-16'>
                    <VscChromeClose className='text-gray-100 h-12 w-12 cursor-pointer transition-all hover:text-orange-300' onClick={() => setIsOpen(false)} />
                </div>

                { /* Barra de navegação */}
                <div className='text-4xl' onClick={() => setIsOpen(false)}>
                    <NavegationBar direction='col' gap='4' color='gray-100' borderColor='border-ocean-blue-900' />
                </div>
            </div >

            {/* Navbar */}
            <header className='py-4 px-6 bg-gray-300 md:px-20'>
                <nav className='flex items-center justify-between py-2 px-4'>
                    <Image src={logo} alt='logo' height={44} width={200} />

                    {/* Icone Menu Mobile */}
                    <div className='md:hidden'>
                        <CgMenuRightAlt className='h-8 w-8 text-ocean-blue-700 cursor-pointer transition-all hover:text-orange-300' onClick={() => setIsOpen(true)} />
                    </div>

                    {/* Navbar Desktop */}
                    <div className='hidden md:block'>
                        <NavegationBar direction='row' gap='8' color='ocean-blue-700' borderColor='border-gray-300' />
                    </div>

                    { /* Contact Button and Search */}
                    <div className='flex items-center justify-center gap-2'>
                        {/* Button Contact */}
                        <button className='flex items-center justify-center gap-2 py-2 px-6 bg-green-500 rounded-full text-gray-100'>
                            <AiOutlineMail className='h-4 w-4 cursor-pointer' />
                            <p className='text-sm'> Fale com especialista </p>
                        </button>

                        {/* Search */}
                        <div className='p-3 bg-gray-400 rounded-full flex items-center justify-center'>
                            <CgSearch className='w-4 h-4 text-blue-600'/>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
