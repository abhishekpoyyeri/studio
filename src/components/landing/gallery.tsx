import Image from "next/image";

const artItems = [
    {
        src: "https://ih1.redbubble.net/image.5198273485.0879/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg",
        title: "Japanese Ink Art",
        artist: "Ryu T.",
        location: "Kyoto, Japan",
        hint: "japanese painting",
    },
    {
        src: "https://i.pinimg.com/736x/88/6c/2d/886c2dd9632df00ec675fdcf6d2fac92.jpg",
        title: "Muralista's Dream",
        artist: "Elena G.",
        location: "Mexico City, Mexico",
        hint: "mexican mural",
    },
    {
        src: "https://i.pinimg.com/736x/4e/5a/70/4e5a708bb807b651d5bc52d74155f22a.jpg",
        title: "Berlin Abstract",
        artist: "Emma K.",
        location: "Berlin, Germany",
        hint: "abstract digital",
    },
    {
        src: "https://static.vecteezy.com/system/resources/previews/001/834/497/non_2x/colorful-african-textile-design-kente-fabric-print-design-african-culture-free-vector.jpg",
        title: "Pattern Heritage",
        artist: "Kwame O.",
        location: "Accra, Ghana",
        hint: "african textile",
    },
    {
        src: "https://i.pinimg.com/736x/dc/75/7c/dc757c9402f6fe3fc5f2c04645e4442b.jpg",
        title: "Urban Perspectives",
        artist: "Ivan P.",
        location: "Sofia, Bulgaria",
        hint: "urban photography",
    },
    {
        src: "https://i.pinimg.com/736x/18/d8/a8/18d8a8826c0f175ba4e1c42099c7de95.jpg",
        title: "Tango Lines",
        artist: "Sofia M.",
        location: "Buenos Aires, Argentina",
        hint: "charcoal sketch",
    },
    {
        src: "https://i.pinimg.com/736x/4a/5f/ae/4a5fae2add193ace27600572f5e25f67.jpg",
        title: "Marble Forms",
        artist: "Marco R.",
        location: "Florence, Italy",
        hint: "marble sculpture",
    },
    {
        src: "https://i.pinimg.com/736x/d7/3b/af/d73baf0de3d751bf5ad4d3aa8cd4e733.jpg",
        title: "Rangoli Colors",
        artist: "Priya S.",
        location: "Mumbai, India",
        hint: "indian art",
    },
];

export function Gallery() {
    return (
        <section id="explore" className="py-20 md:py-28">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Featured Artwork</h2>
                    <p className="text-lg md:text-xl text-muted-foreground mt-4">Discover inspiring art from our global community</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {artItems.map((art, index) => (
                        <div key={index} className="group relative aspect-w-1 aspect-h-1 overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src={art.src}
                                alt={`${art.title} by ${art.artist}`}
                                fill
                                className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                                data-ai-hint={art.hint}
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 p-4 text-white">
                                    <h3 className="font-headline text-lg font-bold">{art.title}</h3>
                                    <p className="text-sm">{art.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
