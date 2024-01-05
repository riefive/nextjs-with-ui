import { jsPDF } from 'jspdf';
import { Button } from '@nextui-org/react';
import { HiMiniArrowDownOnSquare } from 'react-icons/hi2';

export default async function DowloadPdf() {
    const onHandlePdf = () => {
        const doc = new jsPDF('p', 'pt', 'a4', false);
        const myText: HTMLElement | any = document.getElementById('text');
        const myTitle: HTMLElement | any = document.querySelector('.content > h1');
        let split = doc.splitTextToSize(myText.innerText, 200);
        doc.text(myTitle.innerHTML, 75, 15);
        doc.text(split, 5, 75);
        doc.save(`my-document-${new Date().getTime()}.pdf`);
    }

    return (
        <Button 
            color="secondary" 
            variant="bordered" 
            startContent={<HiMiniArrowDownOnSquare/>} 
            onPress={onHandlePdf}
        >
            Make PDF
        </Button>
    )
} 