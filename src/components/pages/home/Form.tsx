"use client"

import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import { BsPlusCircle } from 'react-icons/bs'

export const Form = () => (
    <form>
        <div className='grid grid-cols-2 gap-4 max-w-4xl pb-8'>
            <input 
                type='text' 
                name='name' 
                id='name' 
                required 
                placeholder='Digite seu nome'
                className='p-4 rounded-lg'
            />
            <input 
                type='email' 
                name='email' 
                id='email' 
                required 
                placeholder='Digite seu email'
                className='p-4 rounded-lg'
            />
        </div>

        <div className="flex items-center pb-8">
            <Checkbox.Root
                className="flex h-6 w-6 appearance-none items-center justify-center rounded-[4px] bg-white shadow-[0_1px_5px] outline-none focus:shadow-[0_0_0_1px_black]"
                defaultChecked
                id="c1"
            >
                <Checkbox.Indicator className="text-gray-900">
                    <CheckIcon />
                </Checkbox.Indicator>
            </Checkbox.Root>
            <label className="pl-4 text-gray-900 font-semibold" htmlFor="c1">
                Ao informar meus dados, eu concordo com a Política de Privacidade e concordo em receber comunicações.
            </label>
        </div>
        
        <button type='submit' className='flex items-center gap-2 px-12 py-4 mx-auto font-semibold text-gray-50 bg-gradient-to-r from-rose-300 to-rose-500 rounded-3xl'>
            <BsPlusCircle className='h-6 w-6'/>
            Cadastrar
        </button>
    </form>
);