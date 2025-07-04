import Image from "next/image";

const artItems = [
    {
        src: "https://ih1.redbubble.net/image.5198273485.0879/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg",
        title: "Japanese ink art",
        artist: "",
        location: "Japan",
        hint: "japanese painting",
    },
    {
        src: "https://i.pinimg.com/736x/88/6c/2d/886c2dd9632df00ec675fdcf6d2fac92.jpg",
        title: "Painting",
        artist: "",
        location: "Mexico City, Mexico",
        hint: "mexican mural",
    },
    {
        src: "https://i.pinimg.com/736x/4e/5a/70/4e5a708bb807b651d5bc52d74155f22a.jpg",
        title: "Digital Art",
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
        artist: "",
        location: "Bulgaria",
        hint: "urban photography",
    },
    {
        src: "https://i.pinimg.com/736x/18/d8/a8/18d8a8826c0f175ba4e1c42099c7de95.jpg",
        title: "Sketch art",
        artist: "",
        location: "Argentina",
        hint: "charcoal sketch",
    },
    {
        src: "https://i.pinimg.com/736x/4a/5f/ae/4a5fae2add193ace27600572f5e25f67.jpg",
        title: "sculptures",
        artist: "",
        location: "Italy",
        hint: "marble sculpture",
    },
    {
        src: "https://i.pinimg.com/736x/d7/3b/af/d73baf0de3d751bf5ad4d3aa8cd4e733.jpg",
        title: "Traditional Art",
        artist: "",
        location: "India",
        hint: "indian art",
    },
];

export function Gallery() {
    return (
        <section id="explore" className="py-20 md:py-28">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Featured Artwork</h2>
                    <p className="text-lg md:text-xl text-muted-foreground mt-4">Discover art from around the world</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {artItems.map((art, index) => (
                        <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden group">
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <Image
                                    src={art.src}
                                    alt={art.title}
                                    fill
                                    className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                                    data-ai-hint={art.hint}
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 25vw"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="font-headline text-lg font-bold">{art.title}</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    {art.artist && <span>{art.artist} • </span>}
                                    {art.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
