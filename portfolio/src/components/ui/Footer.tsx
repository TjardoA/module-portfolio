export default function Footer() {
  return (
    <footer className="mt-16 bg-neutral-900 text-neutral-400 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-sm">
          © {new Date().getFullYear()} Tjardo Antonie. All rights reserved.
        </span>
        <div className="flex space-x-4 text-sm">
          <a
            href="https://github.com/TjardoA"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tjardo-antonie-52284726a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/tarndoxd/"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
