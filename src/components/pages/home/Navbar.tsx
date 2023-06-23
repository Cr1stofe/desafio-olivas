'use client'

import { useEffect, useState } from 'react'
import { NavegationBar } from './NavegationBar'

import { VscChromeClose } from 'react-icons/vsc'
import { CgMenuRightAlt, CgSearch } from 'react-icons/cg'

import logo from '../../../assets/logo.png'
import Image from 'next/image'
import { AiOutlineMail } from 'react-icons/ai'
import { ToggleMenu } from './ToggleMenu'

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
            <div className={`flex items-center justify-center fixed z-[1] bg-gray-700 h-full w-full ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition duration-300`}>
                {/* Icone para fechar */}
                <div className='absolute top-10 right-16'>
                    <VscChromeClose className='text-gray-100 h-12 w-12 cursor-pointer transition-all hover:text-green-300' onClick={() => setIsOpen(false)} />
                </div>

                { /* Barra de navegação */}
                <div className='text-2xl' onClick={() => setIsOpen(false)}>
                    <NavegationBar direction='col' gap='8' color='gray-100' borderColor='border-gray-700' />
                </div>
            </div >

            {/* Navbar */}
            <header className='py-4 px-6 bg-gray-100 md:px-20'>
                <nav className='flex items-center justify-between mx-auto py-2 px-4'>
                    <Image src={logo} alt='logo' height={44} width={200} />

                    {/* Icone Menu Mobile */}
                    <div className='relative left-0 lg:hidden'>
                        <CgMenuRightAlt className='h-8 w-8 text-ocean-blue-700 cursor-pointer transition-all hover:text-orange-300' onClick={() => setIsOpen(true)} />
                    </div>

                    {/* Navbar Desktop */}
                    <div className='hidden 2xl:block'>
                        <NavegationBar direction='row' gap='8' color='gray-900' borderColor='border-gray-100' />
                    </div>

                    {/* Togle Menu */}
                    <div className='hidden lg:flex lg:items-center lg:justify-center lg:gap-2 2xl:hidden'>
                        <ToggleMenu />
                    </div>

                    {/* Botão e Search */}
                    <div className='hidden lg:flex lg:items-center lg:justify-center lg:gap-2 2xl:hidden'>
                        {/* Botão fale com especialista */}
                        <button className='flex items-center justify-center gap-2 py-2 px-6 bg-gradient-to-r from-green-500 to-green-300 rounded-full text-gray-100'>
                            <AiOutlineMail className='h-4 w-4 cursor-pointer' />
                            <p className='text-sm'> Fale com especialista </p>
                        </button>

                        {/* Search */}
                        <div className='p-3 bg-gray-400 rounded-full flex items-center justify-center cursor-pointer'>
                            <CgSearch className='w-4 h-4 text-blue-600' />
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
