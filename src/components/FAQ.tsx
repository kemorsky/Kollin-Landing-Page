  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export default function FAQ() {
    return (
        <div className="flex justify-around items-center w-full h-[30rem] gap-8 p-2">
            <h1 className="text-5xl">Vanliga frågor</h1>
            <div>
                <Accordion type="single" collapsible className="w-[35rem]">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-xl">Hur skiljer sig Kollin från andra studieplattformar?</AccordionTrigger>
                        <AccordionContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin justo dolor, tempor quis posuere in,
                        pellentesque a nulla. Proin justo dolor, tempor quis posuere in, pellentesque
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-xl">Kan jag använda Kollin för alla mina kurser?</AccordionTrigger>
                        <AccordionContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin justo dolor, tempor quis posuere in,
                        pellentesque a nulla. Proin justo dolor, tempor quis posuere in, pellentesque
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-xl">Hur använder ni min data?</AccordionTrigger>
                        <AccordionContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin justo dolor, tempor quis posuere in,
                        pellentesque a nulla. Proin justo dolor, tempor quis posuere in, pellentesque
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-xl">Hur ofta uppdateras innehållet?</AccordionTrigger>
                        <AccordionContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin justo dolor, tempor quis posuere in,
                        pellentesque a nulla. Proin justo dolor, tempor quis posuere in, pellentesque
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}