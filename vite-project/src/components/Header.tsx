import  { ReactNode } from 'react';



interface HeaderProps {
    children: ReactNode[];
}
export default function Header({ children }: HeaderProps) {
    return(
        <header className="mb-4 bg-blue-500 text-white p-4" >
        <ul className="flex space-x-4">{children}
        </ul> 
        </header>
    )}