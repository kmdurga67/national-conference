const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">National Conference</h3>
            <p className="text-gray-300 mb-4">
              National Conference on Advanced Sciences
            </p>
            <p className="text-gray-300">
              Feburary 11-12, 2025 | Conference Center, Pune
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/registration" className="text-gray-300 hover:text-white">Registration</a></li>
              <li><a href="/schedule" className="text-gray-300 hover:text-white">Schedule</a></li>
              <li><a href="/venue" className="text-gray-300 hover:text-white">Venue</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@nationalconference.org</li>
              <li>Phone: +91 1234567890</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; National Conference. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;