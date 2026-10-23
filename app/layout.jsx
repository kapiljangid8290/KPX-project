import './globals.css';

export const metadata = {
  title: 'Kalpixs | Web Design, Development, SEO & Digital Marketing',
  description: 'Kalpixs helps ambitious businesses build better digital experiences through web development, CMS solutions, SEO, digital marketing and motion design.',
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
