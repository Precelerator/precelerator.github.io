import Layout from '../components/layout';
import SiteHeader from '../components/site-header';
import Chart from '../components/chart';
import Breadcrumbs from '../components/breadcrumbs';
import Papa from 'papaparse';
import fs from 'fs';
import util from 'util';
import path from 'path';

export default function Hydroponik({ measurements }) {
  return (
    <Layout home={false}>
      <div id="hydroponic">
        <SiteHeader heading="Hydroponik Dashboard"></SiteHeader>
        <div className="event-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Chart measurements={measurements}></Chart>
              </div>
            </div>
          </div>
        </div>
        <Breadcrumbs siteName="Hydroponik"></Breadcrumbs>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  let data = fs.readFileSync(
    path.join(process.cwd(), '/public/data/data.csv'),
    'utf8',
  );
  Papa.parse(data, {
    delimiter: ';',
    header: false,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function (results) {
      data = results.data;
    },
  });

  let measurements = [];
  data.map((d, index) => {
    if (index !== 0)
      measurements.push({
        temp_air: d[0],
        temp_water: d[1],
        b_volt: d[2],
        hum: d[3],
        w_level: d[4],
        timestamp: d[5],
      });
  });

  return {
    props: { measurements },
  };
}

// Real time data through TTN Network - once sensors reach the Internet
//   export async function getServerSideProps(context) {
//     const response = await fetch(
//       'https://func-projektwand-backend.azurewebsites.net/api/GetEvents?code=/Kp3m0YQDHBfHZKCnepP6cOIbwy9CghpaSnQ630bChJBfasteSi4Eg==',
//     );
//     const events = await response.json();

//     return {
//       props: { events },
//     };
//   }
