type RestaurantMapProps = {
  address?: string;
  title?: string;
};

export default function RestaurantMap({
  address = "123 Main Road, Your City",
  title = "Restaurant location",
}: RestaurantMapProps) {
  const encodedAddress = encodeURIComponent(address);
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
  const embedUrl = `https://www.google.com/maps?q=${encodedAddress}&z=15&output=embed`;

  return (
    <div className="rounded-2xl border border-charcoal/10 bg-cream/80 p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div>
          <h3 className="text-lg font-semibold">Find us</h3>
          <p className="text-charcoal/70 mt-1">{address}</p>
        </div>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full border border-spice px-3 py-1.5 text-sm font-medium text-spice hover:bg-spice hover:text-cream transition-colors"
        >
          Get directions
        </a>
      </div>

      <div className="overflow-hidden rounded-xl border border-charcoal/10">
        <iframe
          title={title}
          src={embedUrl}
          className="h-72 w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
