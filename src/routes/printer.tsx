import PageContent from '../components/PageContent/PageContent';
import EnderPrinter from '../assets/printers/Ender-3V3KE.jpeg';

export default function Printer() {
  return (
    <>
      <PageContent title="My Printer">
        <h2>Ender-3 V3 KE</h2>
        <img className="container w-80" src={EnderPrinter} />
      </PageContent>
    </>
  );
}
