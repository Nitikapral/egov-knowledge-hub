

const stats = [
    { value: "1B+", label: "Citizens " },
    { value: "1.1Bn+", label: "Public delivered" },
    { value: "50+", label: "Digital partners" },
    { value: "20 yrs", label: "Of digital transformation" },
];

function Hero() {
    return (
        <section className="hero-section" id="about" aria-labelledby="hero-heading">

            <div className="hero-blob hero-blob-1" aria-hidden="true" />
            <div className="hero-blob hero-blob-2" aria-hidden="true" />

            <div className="hero-container">

                <div className="hero-content">
                    <p className="hero-eyebrow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, atque.</p>

                    <h1 id="hero-heading" className="hero-heading">
                        Public service delivery.{" "}
                        <span className="hero-highlight">It&rsquo;s possible.</span>
                    </h1>

                    <p className="hero-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur suscipit tenetur eum harum tempore nostrum sint maxime molestiae quidem.{" "}
                        <strong>accessible, inclusive</strong> and transparent services to every
                        citizen.
                    </p>

                    <div className="hero-actions" role="group" aria-label="Primary actions">
                        <a href="#about" className="btn-primary">
                            Our Approach
                        </a>
                        <a href="#resources" className="btn-outline">
                            Explore Resources
                        </a>
                    </div>

                    <ul className="hero-stats" role="list" aria-label="Key impact statistics">
                        {stats.map((s) => (
                            <li key={s.label} className="hero-stat">
                                <span className="stat-val">{s.value}</span>
                                <span className="stat-lbl">{s.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hero-visual">
                    <div className="hero-img-wrap">
                        <img
                            src="https://placehold.co/580x440/e8f4f8/1f2937?text=E-Commerce+%26+Website"
                            alt="Citizens and government workers collaborating on digital public service delivery"
                            className="hero-img"
                            width={580}
                            height={440}
                            loading="eager"
                        />
                        <div className="hero-badge" aria-label="Over 1 billion transactions processed">
                            <span className="badge-num">100+</span>
                            <span className="badge-txt">Lorem, ipsum.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;