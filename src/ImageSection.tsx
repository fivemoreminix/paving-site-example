interface ImageSectionProps {
    image_src: string;
    image_alt: string;
    image_on_right: boolean;
    body: React.ReactElement;
}

function ImageSection({ image_src, image_alt, image_on_right, body }: ImageSectionProps) {
    let xl_image_div = <div className="hidden shadow-xl rounded-md xl:block xl:w-1/2 xl:relative">
        <img className={ "absolute inset-0 h-full w-full object-cover object-center " + (image_on_right ? "rounded-r-md" : "rounded-l-md") } src={image_src} alt={image_alt} />
    </div>;

    return (
        <div className="flex my-8 rounded-md shadow-xl max-w-xl xl:w-full xl:max-w-6xl xl:h-64">
            { !image_on_right && xl_image_div }
            <div className={ "xl:flex items-center bg-gray-100 xl:w-1/2 border rounded-md " + (image_on_right ? "xl:rounded-r-none" : "xl:rounded-l-none") }>
                <img className="rounded-t-md w-full h-56 object-cover xl:hidden" src={image_src} alt={image_alt} />
                <div className="px-5 py-4">
                    {body}
                </div>
            </div>
            { image_on_right && xl_image_div }
        </div>
    );
}

export default ImageSection;
