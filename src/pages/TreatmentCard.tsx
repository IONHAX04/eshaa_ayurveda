interface TreatmentCardProps {
  image: string;
  title: string;
}

export default function TreatmentCard({ image, title }: TreatmentCardProps) {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg bg-white">
      <img
        src={image}
        alt={title}
        className="w-[120px] h-[120px] object-cover mb-4"
      />
      <h5 className="text-lg font-semibold text-gray-800">{title}</h5>
    </div>
  );
}
