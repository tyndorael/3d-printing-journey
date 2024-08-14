import PageContent from '../components/PageContent/PageContent';
import TemperatureTower from '../assets/calibrations/temperature-tower.jpeg';
import FlowTestPartOne from '../assets/calibrations/flow-test-part-1.jpeg';

export default function Calibrations() {
  return (
    <>
      <PageContent title="Calibrations">
        <p>
          These calibration tests are for detect the best configurations for the
          printer.
        </p>
        <h2>Temperature Tower</h2>
        <div>
          <p>
            A temperature tower test is a 3D printing calibration technique used
            to determine the optimal printing temperature for a specific
            filament. The test involves printing a vertical tower where each
            section is printed at a different temperature. This allows you to
            visually inspect how the filament performs across a range of
            temperatures, helping you identify the best temperature for optimal
            print quality.
          </p>

          <h2>Steps to Perform a Temperature Tower Test</h2>
          <ol>
            <li>
              <strong>Download a Temperature Tower Model:</strong>
              <ul>
                <li>
                  Search for a temperature tower model on sites like
                  Thingiverse, MyMiniFactory, or other 3D model repositories.
                </li>
                <li>
                  Ensure the model is designed for your filament type and has
                  distinct sections, each labeled with the intended printing
                  temperature.
                </li>
              </ul>
            </li>
            <li>
              <strong>Prepare Your Slicer Software:</strong>
              <ul>
                <li>
                  Import the temperature tower model into your slicer software
                  (e.g., Cura, PrusaSlicer).
                </li>
                <li>
                  Set up your printer profile, including bed size, nozzle size,
                  and filament type.
                </li>
              </ul>
            </li>
            <li>
              <strong>Set Up Temperature Changes:</strong>
              <ul>
                <li>
                  In your slicer, configure the temperature changes for each
                  section of the tower. This is usually done by creating a
                  script or manually adjusting settings.
                </li>
                <li>
                  For example, if you're testing a range from 180°C to 220°C:
                  <ul>
                    <li>Start the first section at 220°C.</li>
                    <li>
                      Lower the temperature by 5°C or 10°C for each subsequent
                      section (e.g., 220°C, 210°C, 200°C, etc.).
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <strong>Slice the Model:</strong>
              <ul>
                <li>
                  Slice the model with the temperature settings applied. The
                  slicer will generate G-code that includes the temperature
                  changes at the correct layer heights.
                </li>
                <li>
                  Check the preview to ensure that the temperature changes occur
                  at the correct layers.
                </li>
              </ul>
            </li>
            <li>
              <strong>Print the Temperature Tower:</strong>
              <ul>
                <li>Load the filament you want to test into your printer.</li>
                <li>
                  Start the print, monitoring the progress to ensure the
                  temperature changes occur as expected.
                </li>
              </ul>
            </li>
            <li>
              <strong>Analyze the Results:</strong>
              <ul>
                <li>
                  Once the print is complete, examine each section of the tower
                  for defects like stringing, warping, layer adhesion, and
                  surface finish.
                </li>
                <li>
                  Identify the section that has the best overall print
                  quality—this is the optimal temperature for that filament.
                </li>
              </ul>
            </li>
          </ol>

          <h2>Tips for a Successful Temperature Tower Test</h2>
          <ul>
            <li>
              <strong>Use Consistent Settings:</strong> Aside from the
              temperature, keep all other settings (e.g., speed, cooling, layer
              height) consistent throughout the print to isolate temperature as
              the only variable.
            </li>
            <li>
              <strong>Monitor the Print:</strong> Keep an eye on the print to
              ensure the temperature changes are being applied correctly. You
              can use the printer's interface or OctoPrint to check real-time
              temperature data.
            </li>
            <li>
              <strong>Record Observations:</strong> Take notes on the appearance
              of each section, especially if you're planning to compare results
              from different filaments.
            </li>
          </ul>

          <h2>Common Issues and Troubleshooting</h2>
          <ul>
            <li>
              <strong>Stringing:</strong> If you notice stringing between the
              tower sections, it may indicate that the temperature is too high.
              Lowering the temperature in future tests may help reduce
              stringing.
            </li>
            <li>
              <strong>Poor Layer Adhesion:</strong> If layers are not sticking
              well, the temperature might be too low, and increasing it could
              improve adhesion.
            </li>
            <li>
              <strong>Inconsistent Surface Finish:</strong> Uneven or rough
              surfaces might suggest an incorrect temperature. Finding the right
              balance between high and low temperatures can help smooth out the
              finish.
            </li>
          </ul>

          <p>
            Performing a temperature tower test is an essential step in
            fine-tuning your 3D printer for optimal performance with any given
            filament.
          </p>
          <img src={TemperatureTower} className="w-80" />
          <p>Result:</p>
        </div>
        <h2>Flow Tests</h2>
        <h3>First Step</h3>
        <div>
          <p className="my-4 text-lg">text...</p>
          <img src={FlowTestPartOne} className="w-80 -rotate-90" />
          <p>Result:</p>
        </div>
      </PageContent>
    </>
  );
}
