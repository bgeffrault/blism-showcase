import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date();

  // Function to format date to YYYY-MM-DD format
  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  return [
    {
      url: 'https://blism.fr', // Your website's main (and only) URL
      lastModified: formatDate(currentDate), // The last modified date
      changeFrequency: 'monthly', // Frequency of change. Adjust as needed.
      priority: 1.0, // Priority of this page (1.0 since it's your main page)
    },
  ]
}
