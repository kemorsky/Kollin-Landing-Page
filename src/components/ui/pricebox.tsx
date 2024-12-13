import * as React from "react"
import { cn } from "@/lib/utils"

const PriceBox = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>
(({ className, ...props}, ref) => (
    <div
        ref={ref}
        className={cn(
            "flex items-center border border-blue-400 h-[18rem] w-[18rem]",
            className
        )}
        {...props}
        />
))
PriceBox.displayName = "PriceBox";

const PriceBoxName = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>
(({className, ...props}, ref) => (
    <h1 
    ref={ref}
    className={cn(
        "text-[2rem] uppercase font-semibold",
        className
    )}
    {...props}/>
))
PriceBoxName.displayName = "PriceBoxName";

const PriceBoxPricing = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>
(({className, ...props}, ref) => (
    <p 
    ref={ref}
    className={cn(
        "text-[1rem] font-semibold tracking-normal",
        className
    )}
    {...props}/>
))
PriceBoxPricing.displayName = "PriceBoxName";

const PriceBoxLeft = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>
(({ className, ...props}, ref) => (
    <div
        ref={ref}
        className={cn(
            "bg-blue-400 flex flex-col justify-between items-start text-white h-full w-[8rem] p-2",
            className
        )}
        {...props}
        />
))
PriceBoxLeft.displayName = "PriceBoxLeft";

const PriceBoxRight = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>
(({ className, ...props}, ref) => (
    <div
        ref={ref}
        className={cn(
            "bg-white text-black flex flex-col justify-between items-start h-full w-[10rem] px-4 py-2",
            className
        )}
        {...props}
        />
))
PriceBoxRight.displayName = "PriceBoxRight";

export { PriceBox, PriceBoxName, PriceBoxPricing, PriceBoxLeft, PriceBoxRight }