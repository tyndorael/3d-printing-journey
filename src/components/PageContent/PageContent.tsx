type PageContentType = {
  children: React.ReactNode;
  title: string;
};

export default function PageContent({ title, children }: PageContentType) {
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {title}
      </h1>
      {children}
    </>
  );
}
