export interface ExploreItem {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  pdfUrl: string;
  gradient: string;
}

export const allExploreData: ExploreItem[] = [
  { slug: 'al-kahaf', title: 'Surah Al-Kahf', subtitle: 'The Cave', description: 'Explore the profound lessons and stories within Surah Al-Kahf.', pdfUrl: '/res/pdfs/surah-al-kahaf-book.pdf', gradient: 'from-blue-600 to-purple-600' },
  { slug: 'al-mulk', title: 'Surah Al-Mulk', subtitle: 'The Sovereignty', description: 'Discover the magnificence of Allah\'s creation and sovereignty.', pdfUrl: '/res/pdfs/surah-al-mulk-workbook.pdf', gradient: 'from-green-600 to-blue-600' },
  { slug: 'yasin', title: 'Surah Yasin', subtitle: 'The Heart of the Quran', description: 'Delve into the spiritual depths of Surah Yasin.', pdfUrl: '/res/pdfs/surah-yasin-workbook.pdf', gradient: 'from-purple-600 to-pink-600' },
  { slug: 'the-perfect-wisdom', title: 'The Perfect Wisdom', subtitle: 'Divine Guidance', description: 'Understanding the perfect wisdom embedded in Islamic teachings.', pdfUrl: '/res/pdfs/surah-yasin-workbook.pdf', gradient: 'from-amber-600 to-orange-600' },
  { slug: 'honey-bee', title: 'The Honey Bee', subtitle: 'Nature\'s Miracle', description: 'Explore the miraculous world of bees as mentioned in the Quran.', pdfUrl: '/res/pdfs/honey-bees.pdf', gradient: 'from-yellow-600 to-amber-600' },
  { slug: 'iron', title: 'Iron in the Quran', subtitle: 'Strength and Foundation', description: 'Discover the scientific significance of iron in the Quran.', pdfUrl: '/res/pdfs/iron.pdf', gradient: 'from-gray-600 to-slate-600' },
  { slug: 'soil', title: 'The Living Earth', subtitle: 'Foundation of Life', description: 'Understanding the role of soil and earth in creation.', pdfUrl: '/res/pdfs/soil.pdf', gradient: 'from-amber-700 to-yellow-600' },
  { slug: 'masjid', title: 'The Sacred Mosque', subtitle: 'House of Worship', description: 'Explore the significance of mosques in Islamic tradition.', pdfUrl: '/res/pdfs/masjid-2.pdf', gradient: 'from-emerald-600 to-teal-600' },
  { slug: 'foods', title: 'Halal Foods', subtitle: 'Nourishment and Purity', description: 'Understanding the wisdom behind halal foods.', pdfUrl: '/res/pdfs/healthy-food.pdf', gradient: 'from-orange-600 to-red-600' },
  { slug: 'umrah', title: 'The Sacred Journey', subtitle: 'Umrah Pilgrimage', description: 'A comprehensive guide to the spiritual journey of Umrah.', pdfUrl: '/res/pdfs/hajj-activity-book.pdf', gradient: 'from-indigo-600 to-purple-600' },
  { slug: 'water', title: 'Water of Life', subtitle: 'Source of All Living', description: 'Explore the miraculous properties of water in the Quran.', pdfUrl: '/res/pdfs/water.pdf', gradient: 'from-cyan-600 to-blue-600' },
  { slug: 'space', title: 'The Expanding Universe', subtitle: 'Cosmic Wonders', description: 'Discover Quranic references to space and the universe.', pdfUrl: '/res/pdfs/space.pdf', gradient: 'from-violet-600 to-purple-600' },
  { slug: 'science', title: 'Science in Islam', subtitle: 'Knowledge and Discovery', description: 'Exploring the relationship between Islamic teachings and science.', pdfUrl: '/res/pdfs/science.pdf', gradient: 'from-teal-600 to-cyan-600' },
  { slug: 'plants', title: 'Plant Kingdom', subtitle: 'Green Miracles', description: 'Understanding plant life through Islamic and scientific perspectives.', pdfUrl: '/res/pdfs/plants.pdf', gradient: 'from-green-500 to-emerald-600' },
  { slug: 'nature', title: 'Nature\'s Signs', subtitle: 'Divine Creation', description: 'Observing Allah\'s signs in the natural world around us.', pdfUrl: '/res/pdfs/nature.pdf', gradient: 'from-lime-600 to-green-600' },
  { slug: 'mountains', title: 'Mighty Mountains', subtitle: 'Earth\'s Anchors', description: 'The role of mountains in Earth\'s stability as mentioned in Quran.', pdfUrl: '/res/pdfs/mountains.pdf', gradient: 'from-stone-600 to-gray-600' },
  { slug: 'history', title: 'Islamic History', subtitle: 'Lessons from the Past', description: 'Learning from the rich history of Islamic civilization.', pdfUrl: '/res/pdfs/history.pdf', gradient: 'from-amber-600 to-yellow-600' },
  { slug: 'gardens', title: 'Gardens of Paradise', subtitle: 'Divine Promise', description: 'Understanding the concept of paradise through Quranic descriptions.', pdfUrl: '/res/pdfs/gardens.pdf', gradient: 'from-emerald-500 to-green-500' },
  { slug: 'dna', title: 'DNA and Creation', subtitle: 'Blueprint of Life', description: 'Exploring genetic science through the lens of Islamic teachings.', pdfUrl: '/res/pdfs/dna.pdf', gradient: 'from-blue-500 to-indigo-600' },
  { slug: 'aerodynamics', title: 'Flight and Birds', subtitle: 'Masters of the Sky', description: 'Understanding flight mechanics through bird studies in Islam.', pdfUrl: '/res/pdfs/aerodynamics.pdf', gradient: 'from-sky-600 to-blue-600' },
  { slug: 'al-quds', title: 'Al-Quds Jerusalem', subtitle: 'The Holy City', description: 'The significance of Jerusalem in Islamic history and faith.', pdfUrl: '/res/pdfs/al-quds-1.pdf', gradient: 'from-yellow-500 to-orange-600' },
  { slug: 'astronomy', title: 'Islamic Astronomy', subtitle: 'Stars and Navigation', description: 'The contributions of Muslim astronomers to science.', pdfUrl: '/res/pdfs/astronomy.pdf', gradient: 'from-indigo-600 to-violet-600' },
  { slug: 'stars', title: 'Stars as Guides', subtitle: 'Celestial Navigation', description: 'How stars have guided humanity throughout history.', pdfUrl: '/res/pdfs/stars.pdf', gradient: 'from-purple-600 to-pink-600' },
  { slug: 'energy', title: 'Energy and Power', subtitle: 'Forces of Creation', description: 'Understanding energy through Islamic and scientific perspectives.', pdfUrl: '/res/pdfs/energy.pdf', gradient: 'from-red-600 to-orange-600' }
];