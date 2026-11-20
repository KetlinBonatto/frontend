
interface TestimonialCardProps {
    name: string;
    role: string;
    testimony: string;
    rating: number;
    image?: string;
}

export default function TestimonialCard({
    name,
    role,
    testimony,
    rating,
    image
}: TestimonialCardProps) {
    return (
        <div className="carousel-card">
            {image ? (
                <img
                    className="profile-icon"
                    src={image}
                    alt={`Foto de ${name}`}
                />
            ) : (
                <span className="profile-icon">👤</span>
            )}

            <span className="testimony">
                <p>{testimony}</p>
            </span>

            <span className="rating">
                {"★".repeat(rating)}
                {"☆".repeat(5 - rating)}
            </span>

            <span className="names">
                <p>{name}</p>
                <p>{role}</p>
            </span>
        </div>
    );
}
