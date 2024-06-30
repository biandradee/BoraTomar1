"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./card";
import useSWR from 'swr';
import { useState } from "react";
import { Modal } from "./modal";
import { FaStar } from 'react-icons/fa';

interface Item {
    name: string;
    address: string;
    id: number;  
};

export default function Cards() {

    const [selectedCard, setSelectedCard] = useState<Item | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    function handleOpenModal(item: Item) {
        setSelectedCard(item);
        setModalOpen(true);
    };

    const { data, error }: { data: Item[]; error: any } = useSWR('https://c56f3fc0-08a9-4aa1-a57f-457e7f3c815b.mock.pstmn.io/v1/758065a8-3bdc-4712-bfcc-4b8fe7d4fa55', async url => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    });

    if (error) return <div>Erro ao carregar os dados</div>;
    if (!data) return <div>Carregando...</div>;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 cursor-pointer">
            {data.map((item) => (
                <Card key={item.id} className="bg-white h-[130px] sm:flex sm:flex-col sm:items-start"  onClick={() => handleOpenModal(item)}>
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold">{item.name}</CardTitle>
                        <CardDescription className=" text-zinc-600 text-lg">{item.address}</CardDescription>
                        <CardDescription>
                            <h3 className="flex">
                                5.0
                                <div className="ml-[5px] flex items-center justify-center">
                                    <FaStar className="text-amber-300"/>
                                    <FaStar className="text-amber-300"/>
                                    <FaStar className="text-amber-300"/>
                                    <FaStar className="text-amber-300"/>
                                    <FaStar className="text-amber-300"/>
                                </div>
                            </h3>
                        </CardDescription>
                    </CardHeader>
                </Card>
            ))}

            {selectedCard && (
                <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} selectedCard={selectedCard} />
            )}

        </div>
    )
}