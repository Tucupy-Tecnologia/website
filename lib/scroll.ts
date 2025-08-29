export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
}

export function handleHashLinkClick(e: React.MouseEvent<HTMLAnchorElement>, hash: string) {
  e.preventDefault();
  const sectionId = hash.replace('#', '');
  scrollToSection(sectionId);
  
  // Update URL without triggering a page jump
  if (window.history.pushState) {
    window.history.pushState(null, '', hash);
  }
}