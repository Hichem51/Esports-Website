import { NexusCard } from '../common/NexusCard';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800', alt: 'Esports Arena' },
  { src: 'https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&q=80&w=800', alt: 'Gaming Setup' },
  { src: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80&w=800', alt: 'Gaming Controller' },
  { src: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=800', alt: 'Esports Competition' },
  { src: 'https://static0.polygonimages.com/wordpress/wp-content/uploads/chorus/uploads/chorus_asset/file/7073703/league_of_legends_world_championship_2015.0.0.jpg?w=1200&h=675&fit=crop', alt: 'Gaming Event' },
  { src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800', alt: 'Digital Arena' },
];

export const PhotoGallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {galleryImages.map((img, i) => (
        <NexusCard key={i} className="aspect-video overflow-hidden group cursor-pointer">
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </NexusCard>
      ))}
    </div>
  );
};
