export default function Footer() {
  return (
    <footer id="contact" className="border-t border-charcoal/10 mt-16">
      <div className="max-w-5xl mx-auto px-5 py-10 grid sm:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-semibold mb-2">Visit us</h3>
          <p className="text-charcoal/70">
            123 Main Road, Your City
            <br />
            Open daily, 11am – 11pm
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-charcoal/70">
            Phone: +91 98765 43210
            <br />
            Email: hello@restaurant.com
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Hours</h3>
          <p className="text-charcoal/70">
            Mon – Sun
            <br />
            11:00 AM – 11:00 PM
          </p>
        </div>
      </div>
      <div className="text-center text-xs text-charcoal/50 pb-6">
        © {new Date().getFullYear()} Restaurant Name. All rights reserved.
      </div>
    </footer>
  );
}
