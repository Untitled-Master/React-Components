import { ArrowRight } from 'lucide-react';

const Hero = ({
    imageSrc = "/api/placeholder/600/600", 
    title = "Elevate Your Digital Experience",
    subtitle = "Innovative Solutions for Modern Challenges",
    description = "Transforming ideas into powerful digital products that drive success and create meaningful impact.",
    tags = ['Innovation', 'Technology', 'Design'],
    ctaText = "Get Started",
    onCtaClick = () => {}
}) => {
    return (
        <div className="bg-[#09090B] min-h-screen flex items-center justify-center px-6 py-12">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Image Section */}
                <div className="relative group">
                    <div className="bg-[#FAFAFA]/10 absolute inset-0 rounded-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-300 ease-in-out"></div>
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FAFAFA]/20">
                        <img 
                            src={imageSrc} 
                            alt={title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="space-y-6">
                    {/* Subtitle */}
                    <p className="text-lg text-[#FAFAFA]/60 uppercase tracking-widest">
                        {subtitle}
                    </p>

                    {/* Title */}
                    <h1 className="text-5xl font-bold text-[#FAFAFA] leading-tight">
                        {title}
                    </h1>

                    {/* Description */}
                    <p className="text-xl text-[#FAFAFA]/80 leading-relaxed">
                        {description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-medium text-[#FAFAFA]/60 mr-2">
                            Key Features:
                        </span>
                        {tags.map((tag) => (
                            <span 
                                key={tag} 
                                className="px-3 py-1 rounded-full text-xs bg-[#FAFAFA]/10 text-[#FAFAFA] hover:bg-[#FAFAFA]/20 transition-colors"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-6">
                        <button 
                            onClick={onCtaClick}
                            className="group flex items-center gap-2 bg-[#FAFAFA] text-[#09090B] px-6 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all"
                        >
                            {ctaText}
                            <ArrowRight 
                                className="transform group-hover:translate-x-1 transition-transform" 
                                size={20} 
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

// Example of custom usage
export function CustomHero() {
    const handleCtaClick = () => {
        // Custom click handler
        console.log('CTA Clicked');
    };

    return (
        <Hero 
            imageSrc="/custom-image.jpg"
            title="Custom Hero Title"
            subtitle="Unique Approach"
            description="Detailed description of your innovative solution."
            tags={['Custom', 'Flexible', 'Powerful']}
            ctaText="Explore Now"
            onCtaClick={handleCtaClick}
        />
    );
}
