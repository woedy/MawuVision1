import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTitleProps {
  title: string;
}

export function PageTitle({ title }: PageTitleProps) {
  const location = useLocation();
  
  useEffect(() => {
    document.title = `${title} | Mawu Vision`;
    
    // Optional: Update meta description based on the page
    const descriptionMap: Record<string, string> = {
      '/': 'Innovative technology solutions for your business',
      '/about': 'Learn about Mawu Vision and our mission',
      '/services': 'Explore our professional services',
      '/projects': 'Discover our latest projects and work',
      '/contact': 'Get in touch with our team'
    };

    const description = descriptionMap[location.pathname] || 'Mawu Vision - Innovative Technology Solutions';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Cleanup function to reset the title when component unmounts
    return () => {
      document.title = 'Mawu Vision';
    };
  }, [title, location.pathname]);

  return null; // This component doesn't render anything
}
