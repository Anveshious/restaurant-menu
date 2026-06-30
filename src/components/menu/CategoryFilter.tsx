"use client";

interface CategoryFilterProps {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  active,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {["All", ...categories].map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
            active === cat
              ? "bg-charcoal text-cream border-charcoal"
              : "border-charcoal/20 text-charcoal/70 hover:border-charcoal/40"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
