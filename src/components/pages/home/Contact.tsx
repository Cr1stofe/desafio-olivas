import { Form } from './Form';

export function Contact() {
    return (
        <div className="flex flex-col items-center gap-4 min-h-[430px] py-16 bg-gray-400 rounded-t-[300px]">
            <div className='flex flex-col items-center justify-center gap-8 pb-4 mx-auto my-0'>
                <p className='text-4xl font-bold text-blue-950'> Receba <span className='text-blue-400'> nossas novidades </span> </p>
                <div className='w-24 h-2 bg-blue-400 rounded-full' />
            </div>
            <p className="text-base text-gray-600">
                Quer receber conteúdos exclusivos no seu e-mail?
            </p>
            <Form />
        </div>
    )
}