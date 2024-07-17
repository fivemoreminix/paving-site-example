interface BtnProps {
    text: string;
}

function Btn({ text }: BtnProps) {
    return (
        <a href="#" className="inline-block bg-amber-500 mt-2 px-4 py-2 rounded-lg text-white shadow-md transition focus:ring-2 hover:bg-amber-400 active:bg-amber-600">
            {text}
        </a>
    );
}

export default Btn;
