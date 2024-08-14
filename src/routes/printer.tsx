import PageContent from '../components/PageContent/PageContent';
import EnderPrinter from '../assets/printers/Ender-3V3KE.jpeg';

export default function Printer() {
  return (
    <>
      <PageContent title="My Printer">
        <h2>Ender-3 V3 KE</h2>
        <img className="container w-80 flex" src={EnderPrinter} />
        <div className="container">
          <h2>Main Features of the Ender 3 V3 3D Printer</h2>
          <ul>
            <li>
              <strong>Build Volume:</strong> The Ender 3 V3 offers a generous
              build volume of 220 x 220 x 250 mm, allowing for the creation of a
              wide range of models.
            </li>
            <li>
              <strong>Print Quality:</strong> It provides high-quality prints
              with a resolution of 0.1 mm, offering smooth and detailed results
              for various projects.
            </li>
            <li>
              <strong>Hotbed and Temperature Control:</strong> The printer
              includes a heated bed that can reach temperatures of up to 110°C,
              which is essential for printing with materials like ABS and PETG.
              The hotend can reach up to 260°C, enabling compatibility with
              various filaments.
            </li>
            <li>
              <strong>Extruder:</strong> The Bowden-style extruder on the Ender
              3 V3 ensures precise filament feeding, reducing the risk of clogs
              and improving overall print quality.
            </li>
            <li>
              <strong>Stability and Frame Design:</strong> The sturdy aluminum
              frame design enhances stability during printing, reducing
              vibrations and improving print accuracy.
            </li>
            <li>
              <strong>Ease of Assembly:</strong> The Ender 3 V3 comes as a
              semi-assembled kit, requiring only a few steps to complete the
              assembly process. It's beginner-friendly and can be assembled in
              about an hour.
            </li>
            <li>
              <strong>User-Friendly Interface:</strong> The printer features an
              LCD screen with a simple and intuitive interface, making it easy
              to navigate settings and monitor print progress.
            </li>
            <li>
              <strong>Power Recovery:</strong> This printer has a power recovery
              feature, which allows it to resume printing from where it left off
              in case of a power outage.
            </li>
            <li>
              <strong>Filament Compatibility:</strong> It supports a wide range
              of filaments, including PLA, ABS, PETG, and TPU, offering
              versatility for different types of projects.
            </li>
            <li>
              <strong>Upgradeable:</strong> The Ender 3 V3 is highly
              customizable, with a large community of users who create and share
              upgrades. You can easily find mods and enhancements to improve
              performance or add new features.
            </li>
            <li>
              <strong>Affordability:</strong> One of the most attractive
              features of the Ender 3 V3 is its cost-effectiveness, providing
              high-quality 3D printing at an affordable price point.
            </li>
          </ul>
        </div>
      </PageContent>
    </>
  );
}
