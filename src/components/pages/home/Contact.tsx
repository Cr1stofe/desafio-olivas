import { Form } from './Form';

export function Contact() {
    return (
        /* Container principal */
        <div className="flex flex-col items-center gap-4 p-8 min-h-[430px] py-16 bg-gray-400 md:px-0 rounded-t-[150px] md:rounded-t-[300px]">
            
            {/* Titulo e decoração */}
            <div className='flex flex-col items-center justify-center gap-8 pb-4 mx-auto my-0'>
                {/* Titulo */}
                <p className='text-3xl text-center md:text-4xl font-bold text-blue-950'> Receba <span className='text-blue-400'> nossas novidades </span> </p>
                {/* Decoração */}
                <div className='w-24 h-2 bg-blue-400 rounded-full' />
            </div>

            {/* Pergunta email */}
            <p className="text-base text-gray-600">
                Quer receber conteúdos exclusivos no seu e-mail?
            </p>

            {/* Formulário */}
            <Form />
        </div>
    )
}