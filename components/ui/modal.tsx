"use client";
import { FaStar } from 'react-icons/fa';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import useSWR from 'swr';

interface ModalProps{
    isOpen: boolean; 
    onClose: () => void;
    selectedCard: Item | null;
};

interface Item {
    name: string;
    address: string;
    id: number;  
};

interface Dados {
    nome: string;
    preco: string;
};
  
const dados: Dados[] = [
    { nome: 'Budweiser', preco: 'R$ 12,00' },
    { nome: 'Heineken', preco: 'R$ 12,00' },
    { nome: 'Brahma', preco: 'R$ 12,00' },
    { nome: 'Stela', preco: 'R$ 12,00' },
    { nome: 'Original', preco: 'R$ 12,00' },
    { nome: 'Spaten', preco: 'R$ 12,00' },
    { nome: 'Budweiser', preco: 'R$ 12,00' },
    { nome: 'Heineken', preco: 'R$ 12,00' },
    { nome: 'Brahma', preco: 'R$ 12,00' },
    { nome: 'Stela', preco: 'R$ 12,00' },
    { nome: 'Brahma', preco: 'R$ 12,00' },
    { nome: 'Stela', preco: 'R$ 12,00' },
];


export function Modal({ isOpen, onClose, selectedCard }: ModalProps) {
    if (!isOpen || !selectedCard) return null;

    const indiceMeio = Math.ceil(dados.length / 2);
    
    const { data, error }: { data: Item[]; error: any } = useSWR('https://c56f3fc0-08a9-4aa1-a57f-457e7f3c815b.mock.pstmn.io/v1/758065a8-3bdc-4712-bfcc-4b8fe7d4fa55', async url => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    });

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
            
            <div className="relative z-10 h-[500px] w-[750px] overflow-y-auto bg-white p-6 md:rounded-lg">

                <div className="w-full flex justify-around h-[250px]">
                    <div className="mt-[10px]">
                        <Carousel className="w-[350px] h-[350px]" autoPlay infiniteLoop showThumbs={false}>  
                            <img src="/img/bar.jpg" alt="image1"/> 
                            <img src="/img/bar2.jpg" alt="image2" />             
                            <img src="/img/bar3.png" alt="image3"/>     
                        </Carousel>
                    </div>
                    <div className=" mt-[50px] text-zinc-600 text-xl">
                        <h2 className="text-xl font-bold">
                            {selectedCard.name}    
                        </h2>
                        <h3 className="flex py-[5px]">
                            5.0
                            <div className="ml-[5px] flex items-center justify-center">
                                <FaStar className="text-amber-300"/>
                                <FaStar className="text-amber-300"/>
                                <FaStar className="text-amber-300"/>
                                <FaStar className="text-amber-300"/>
                                <FaStar className="text-amber-300"/>
                            </div>
                        </h3>
                        <div className="w-[250px]">
                            <h3 className="py-[5px]">{selectedCard.address}</h3>
                            <h3 className="py-[5px]">Aberto - Fecha 23:00</h3>
                        </div>
                    </div>
                </div>     
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center w-[650px] h-[200px]">
                        <div className="flex flex-col m-[10px]">
                        {dados.slice(0, indiceMeio).map((dados, index) => (
                            <div className="flex" key={index}>
                                <span className="mr-[140px]">{dados.nome}</span>
                                <span className="ml-auto font-semibold">{dados.preco}</span>
                            </div>
                        ))}
                        </div>
                        <div className="border-l border-black h-[150px]"></div>
                        <div className="flex flex-col m-[10px]">
                        {dados.slice(indiceMeio).map((dados, index) => (
                            <div className="flex" key={index}>
                                <span className="mr-[140px]">{dados.nome}</span>
                                <span className="ml-auto font-semibold">{dados.preco}</span>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>

                <button type="button" className="absolute right-0 top-0 m-3 text-gray-400 transition-all hover:text-red-400" onClick={onClose}>
                    X
                </button>
            </div>

        </div>
    )
}