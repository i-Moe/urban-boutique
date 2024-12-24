import FadeIn from '@/components/FadeIn';
import balconyImage from '@/assets/images/balcony.jpg';
import familyRoomImage from '@/assets/images/family.jpg';

const galleryImages = [balconyImage, familyRoomImage];

export default function Gallery() {
  return (
    <section id="gallery" className="py-40 bg-cream">
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>
        </FadeIn>
        <div className="grid grid-cols-2 gap-4">
          {galleryImages.map((image, index) => (
            <img key={index} src={image} alt={`Room ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
